import React, { useState } from "react";
import { VerificationRequest } from "@/types";
import SDK from "@hyperledger/identus-edge-agent-sdk";
import IndexDB from '@pluto-encrypted/indexdb';
import { addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
addRxPlugin(RxDBDevModePlugin);

let agent: SDK.Agent;

const mediatorDID = SDK.Domain.DID.from("did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHA6Ly8xOTIuMTY4LjEuNDQ6ODA4MCIsImEiOlsiZGlkY29tbS92MiJdfX0.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vMTkyLjE2OC4xLjQ0OjgwODAvd3MiLCJhIjpbImRpZGNvbW0vdjIiXX19");
const PUBLISHED_DID = "did:prism:df3389671b3a458cc226693a886b9a0f1fd403d305deb177f38741319c8c9d94:CrEBCq4BEjYKBWF1dGgxEARKKwoHRWQyNTUxORIgURsOwA5bVlw0Qg1ArlzbVLJW3dplphFjSoM-DwPhXSsSNwoGaXNzdWUxEAJKKwoHRWQyNTUxORIgZoJiDMHCgRY-R2CNqFpZX2bsAsNky3DVuZ1M-nttEEUSOwoHbWFzdGVyMBABSi4KCXNlY3AyNTZrMRIhA-cZDMykLi51VSorocxs_6J5w_8_eQ-YUp6Xyny1ExjN";

const Pharmacy: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oobUrl, setOobUrl] = useState<string>();
  const [newRequest, setNewRequest] = useState<VerificationRequest>();
  const [verificationRequests, setVerificationRequests] = useState<VerificationRequest[]>([
    {
      id: "1",
      dosage: "500mg",
      quantity: 1,
      prescriptionName: "John Doe",
      prescriptionDetails: "Amoxicillin 500mg, 3 times daily for 7 days",
      issuanceDate: Date.now(),
      expirationDate: Date.now(),
      status: "Pending",
    }
  ]);

  React.useEffect(() => {
    const apollo = new SDK.Apollo();
    const store = new SDK.Store({
      name: "test",
      storage: IndexDB,
      password: "85e1ea1f72a16fc20fdf9dc48b898f65baecf21f74a29a8eb31ed2bc9efbb58d",
      ignoreDuplicate: true
    });
    const pluto = new SDK.Pluto(store, apollo);
    agent = SDK.Agent.initialize({ pluto, mediatorDID });
    agent.start().then(() => { setStarted(true); });
  }, []);

  React.useEffect(() => {
    if (!started) return;

    agent.addListener(SDK.ListenerKey.MESSAGE, message => {
      console.log({ message });
      // TODO add message to verificationRequests for display
      // setVerificationRequests
    });
  }, [started]);

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();


    // const currentDate = new Date().toISOString().split('T')[0];
    // const newVerificationRequest: VerificationRequest = {
    //   id: (verificationRequests.length + 1).toString(),
    //   dosage: "500mg",
    //   quantity: 1,
    //   prescriptionName: newRequest.prescriptionName,
    //   prescriptionDetails: newRequest.prescriptionDetails,
    //   status: "Pending",
    //   dateRequested: currentDate,
    // };
    // setVerificationRequests((prev) => [...prev, newVerificationRequest]);
    // setNewRequest({ patientName: "", prescriptionDetails: "" });
    setIsModalOpen(false);
  };


  const msgToJson = (msg: SDK.Domain.Message) => ({
    id: msg.id,
    typ: "application/didcomm-plain+json",
    type: msg.piuri,
    body: msg.body,
    to: [],
    from: msg.from?.toString(),
    // from_prior: msg.fromPrior,
    attachments: msg.attachments,
    created_time: Number(msg.createdTime),
    // thid: msg.thid,
    // pthid: msg.pthid,
  });

  const handleRequestChange = async () => {
    // TODO move this to submit fn
    const did = await agent.createNewPeerDID([], true);
    // const doc = await agent.castor.resolveDID(did.toString());
    const request = await agent.initiatePresentationRequest(SDK.Domain.CredentialType.JWT, did, {
      claims: {

      }
    });

    const reqMsg = request.makeMessage();
    console.log({ reqMsg });
    // ?? we should have a way to do this - making messages into attachments etc
    const reqRaw = msgToJson(reqMsg);
    const attachment = SDK.Domain.AttachmentDescriptor.build({ json: JSON.stringify(reqRaw) });
    const oobMsg = new SDK.Domain.Message(
      {
        goal: "Connectionless Presentation Request",
        goal_code: "oob",
        accept: ["didcomm/v2"],
      },
      "f96e3699-591c-4ae7-b5e6-6efe6d26255b",
      SDK.ProtocolType.Didcomminvitation,
      did,
      did,
      [attachment]
    );

    // TODO this should be fixed
    (oobMsg as any).type = oobMsg.piuri;
    const oobRaw = msgToJson(oobMsg);
    const oobData = Buffer.from(JSON.stringify(oobRaw)).toString("base64");
    const oob = `https://my.domain.com/path?_oob=${oobData}`;

    // setOobUrl(oob);
    // setIsModalOpen(true);

    console.log({ request });
    console.log({ attachment });
    console.log({ oob });
    console.log({ oobRaw });
    console.log({ oobLength: oob.length });

    // test recieving and verifying oob works (all below can be removed)
    const parsed = await agent.parseInvitation(oob);
    await agent.acceptInvitation(parsed);
    const messages = await agent.pluto.getAllMessages();
    console.log({ parsed });
    console.log({ messages });
    const latestMsg = messages.at(-1);
    const requestPresentation = SDK.RequestPresentation.fromMessage(latestMsg!);
    // const requestPresentationAttached = requestPresentation.decodedAttachments.at(0);

    // const credentials = await agent.pluto.getAllCredentials();
    // const credential = credentials.at(0);
    // console.log({ credentials });

    const medid = await agent.createNewPrismDID("medid");
    const credentialPayloadEncoded = "eyJhbGciOiJFUzI1NksifQ.eyJpc3MiOiJkaWQ6cHJpc206MjU3MTlhOTZiMTUxMjA3MTY5ODFhODQzMGFkMGNiOTY4ZGQ1MzQwNzM1OTNjOGNkM2YxZDI3YTY4MDRlYzUwZTpDcG9DQ3BjQ0Vsb0tCV3RsZVMweEVBSkNUd29KYzJWamNESTFObXN4RWlBRW9TQ241dHlEYTZZNnItSW1TcXBKOFkxbWo3SkMzX29VekUwTnl5RWlDQm9nc2dOYWVSZGNDUkdQbGU4MlZ2OXRKZk53bDZyZzZWY2hSM09xaGlWYlRhOFNXd29HWVhWMGFDMHhFQVJDVHdvSmMyVmpjREkxTm1zeEVpRE1rQmQ2RnRpb0prM1hPRnUtX2N5NVhtUi00dFVRMk5MR2lXOGFJU29ta1JvZzZTZGU5UHduRzBRMFNCVG1GU1REYlNLQnZJVjZDVExYcmpJSnR0ZUdJbUFTWEFvSGJXRnpkR1Z5TUJBQlFrOEtDWE5sWTNBeU5UWnJNUklnTzcxMG10MVdfaXhEeVFNM3hJczdUcGpMQ05PRFF4Z1ZoeDVzaGZLTlgxb2FJSFdQcnc3SVVLbGZpYlF0eDZKazRUU2pnY1dOT2ZjT3RVOUQ5UHVaN1Q5dCIsInN1YiI6ImRpZDpwcmlzbTpiZWVhNTIzNGFmNDY4MDQ3MTRkOGVhOGVjNzdiNjZjYzdmM2U4MTVjNjhhYmI0NzVmMjU0Y2Y5YzMwNjI2NzYzOkNzY0JDc1FCRW1RS0QyRjFkR2hsYm5ScFkyRjBhVzl1TUJBRVFrOEtDWE5sWTNBeU5UWnJNUklnZVNnLTJPTzFKZG5welVPQml0eklpY1hkZnplQWNUZldBTi1ZQ2V1Q2J5SWFJSlE0R1RJMzB0YVZpd2NoVDNlMG5MWEJTNDNCNGo5amxzbEtvMlpsZFh6akVsd0tCMjFoYzNSbGNqQVFBVUpQQ2dselpXTndNalUyYXpFU0lIa29QdGpqdFNYWjZjMURnWXJjeUluRjNYODNnSEUzMWdEZm1BbnJnbThpR2lDVU9Ca3lOOUxXbFlzSElVOTN0Snkxd1V1TndlSV9ZNWJKU3FObVpYVjg0dyIsIm5iZiI6MTY4NTYzMTk5NSwiZXhwIjoxNjg1NjM1NTk1LCJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJhZGRpdGlvbmFsUHJvcDIiOiJUZXN0MyIsImlkIjoiZGlkOnByaXNtOmJlZWE1MjM0YWY0NjgwNDcxNGQ4ZWE4ZWM3N2I2NmNjN2YzZTgxNWM2OGFiYjQ3NWYyNTRjZjljMzA2MjY3NjM6Q3NjQkNzUUJFbVFLRDJGMWRHaGxiblJwWTJGMGFXOXVNQkFFUWs4S0NYTmxZM0F5TlRack1SSWdlU2ctMk9PMUpkbnB6VU9CaXR6SWljWGRmemVBY1RmV0FOLVlDZXVDYnlJYUlKUTRHVEkzMHRhVml3Y2hUM2UwbkxYQlM0M0I0ajlqbHNsS28yWmxkWHpqRWx3S0IyMWhjM1JsY2pBUUFVSlBDZ2x6WldOd01qVTJhekVTSUhrb1B0amp0U1haNmMxRGdZcmN5SW5GM1g4M2dIRTMxZ0RmbUFucmdtOGlHaUNVT0JreU45TFdsWXNISVU5M3RKeTF3VXVOd2VJX1k1YkpTcU5tWlhWODR3In0sInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiXSwiQGNvbnRleHQiOlsiaHR0cHM6XC9cL3d3dy53My5vcmdcLzIwMThcL2NyZWRlbnRpYWxzXC92MSJdfX0.x0SF17Y0VCDmt7HceOdTxfHlofsZmY18Rn6VQb0-r-k_Bm3hTi1-k2vkdjB25hdxyTCvxam-AkAP-Ag3Ahn5Ng";
    const credentialPayload = {
      iss: PUBLISHED_DID,
      sub: medid.toString(),
      nbf: 1685631995,
      exp: 1685635595,
      vc: {
        "@context": [SDK.Domain.W3CVerifiableCredentialContext.credential],
        type: [SDK.Domain.W3CVerifiableCredentialType.credential],
        issuanceDate: new Date(1685631995).toISOString(),
        expirationDate: new Date(2685635595).toISOString(),
        issuer: PUBLISHED_DID,
        credentialSubject: {
          id: PUBLISHED_DID,
          additionalProp2: 'Test3',
        },
      },
      jti: credentialPayloadEncoded,
    };
    const credential = new SDK.JWTCredential(credentialPayload as any);

    const presentation = await agent.createPresentationForRequestProof(requestPresentation, credential);
    // await agent.sendMessage(presentation.makeMessage());
    console.log({ presentation });

    const verified = await agent.handlePresentation(presentation);
    console.log({ verified });
  };

  // TODO embed better
  if (!started) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Pharmacy Verification Portal</h1>

      {/* Verification Requests List */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Verification Requests</h2>
        {verificationRequests.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {verificationRequests.map((request) => {
              const classStatus = request.status === 'Pending'
                ? 'bg-yellow-100 text-yellow-800'
                : request.status === 'Verified'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800';

              return (
                <li key={request.id} className="py-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-medium text-indigo-600">{request.prescriptionName}</p>
                      <p className="text-sm text-gray-500">{request.prescriptionDetails}</p>
                      <p className="text-sm text-gray-400">Requested: {new Date(request.expirationDate).toDateString()}</p>
                    </div>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${classStatus}`}>
                      {request.status}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500">No verification requests yet.</p>
        )}
      </div>

      {/* Create New Request Button */}
      <button
        onClick={() => handleRequestChange()}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Test
      </button>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create New Verification Request
      </button>

      {/* New Request Modal */}
      {isModalOpen && !oobUrl && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Create Verification Request</h3>
            <form onSubmit={handleSubmitRequest}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientName">
                  Patient Name
                </label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={newRequest?.prescriptionName ?? ""}
                  onChange={handleRequestChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prescriptionDetails">
                  Prescription Details
                </label>
                <textarea
                  id="prescriptionDetails"
                  name="prescriptionDetails"
                  value={newRequest?.prescriptionDetails ?? ""}
                  onChange={handleRequestChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isModalOpen && !!oobUrl && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Verification Request</h3>
            <form onSubmit={handleSubmitRequest}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientName">
                  QR Code
                </label>
              </div>
              <div className="mb-4">
                {/* QR codes don't work :( */}
                {/* <QRCode value={oobUrl} /> */}
                {/* <QRCodeSVG value={oobUrl} /> */}
                {/* <QRCodeCanvas value={oobUrl} /> */}
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pharmacy;
