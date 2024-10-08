import React, { useEffect, useState } from "react";
import { Patient, Prescription } from "@/types";
import { HealthcareCardanoLogo } from "@/components/HealthcareCardanoLogo";
import { PrescriptionModal } from "@/components/PrescriptionModal";
import { HealthCard } from "@/components/HealthCard";

const BASE_URL = "http://localhost:8090/cloud-agent";
/**
 * During the demo:
 * 1. Create unpublished ed25519 DID
 * 2. Publish DID
 * 3. Create connectionID
 */
const PUBLISHED_DID = "did:prism:df3389671b3a458cc226693a886b9a0f1fd403d305deb177f38741319c8c9d94:CrEBCq4BEjYKBWF1dGgxEARKKwoHRWQyNTUxORIgURsOwA5bVlw0Qg1ArlzbVLJW3dplphFjSoM-DwPhXSsSNwoGaXNzdWUxEAJKKwoHRWQyNTUxORIgZoJiDMHCgRY-R2CNqFpZX2bsAsNky3DVuZ1M-nttEEUSOwoHbWFzdGVyMBABSi4KCXNlY3AyNTZrMRIhA-cZDMykLi51VSorocxs_6J5w_8_eQ-YUp6Xyny1ExjN";
const CONNECTION_ID = "530e0115-b573-4434-8f40-c2c3d3f40f7a";

async function fetchPrescriptions(): Promise<Prescription[]> {
  const myHeaders = new Headers();
  const requestOptions = {
    method: "GET",
    headers: myHeaders
  };
  const response = await fetch(BASE_URL + "/issue-credentials/records", requestOptions);
  const responseJson = await response.json();
  return responseJson.contents.filter((prescription) => {
    return prescription && prescription.claims.patientIdentifier !== undefined
  }).map((p) => p.claims)
}

async function issuePrescription(prescription: Prescription): Promise<void> {
  const myHeaders = new Headers();
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      "validityPeriod": 360000,
      "credentialFormat": "SDJWT",
      "claims": prescription,
      "automaticIssuance": true,
      "issuingDID": `${PUBLISHED_DID}`,
      "connectionId": `${CONNECTION_ID}`
    })
  };
  await fetch(BASE_URL + "/issue-credentials/credential-offers", requestOptions);
}

type AgentState = {
  isFetchingPrescriptions: boolean,
  hasFetchedPrescriptions: boolean,
}

const Agent: React.FC = () => {
  const [state, setState] = useState<AgentState>({ isFetchingPrescriptions: false, hasFetchedPrescriptions: false })
  const [patient] = useState<Patient>({
    id: "123456",
    name: "John Doe",
    age: 35,
    gender: "Male",
    bloodType: "A+",
    allergies: ["Penicillin", "Peanuts"],
  });
  const [issuedPrescriptions, setIssuedPrescriptions] = useState<Prescription[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (!state.hasFetchedPrescriptions) {
      setState({ ...state, isFetchingPrescriptions: true })
      fetchPrescriptions().then((prescriptions) => {
        setState({
          ...state,
          isFetchingPrescriptions: false,
          hasFetchedPrescriptions: true
        })
        setIssuedPrescriptions(prescriptions)
      }).catch((err) => {
        console.log(err)
        setState({
          ...state,
          isFetchingPrescriptions: false,
          hasFetchedPrescriptions: true
        })
      })
    }
  }, [state.isFetchingPrescriptions, state.hasFetchedPrescriptions])
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
        <HealthcareCardanoLogo className="w-12 h-12 mr-2" /> Healthcare Portal
      </h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <HealthCard patient={patient} />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Issued Prescriptions
            </h2>
            {issuedPrescriptions.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {issuedPrescriptions.map((prescription) => (
                  <li key={prescription.patientIdentifier} className="py-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-lg font-medium text-indigo-600">
                          {prescription.medicationName}
                        </p>
                        <p className="text-sm text-gray-500">
                          Dosage: {prescription.dosage}
                        </p>
                        <p className="text-sm text-gray-500">
                          Quantity: {prescription.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">
                          Issued: {new Date(prescription.issuanceDate).toDateString()}
                        </p>
                        <p className="text-sm text-gray-400">
                          Expires: {new Date(prescription.expirationDate).toDateString()}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No prescriptions issued yet.</p>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >Issue New Prescription</button>
      {isModalOpen &&
        <PrescriptionModal
          onSubmit={(prescription) => issuePrescription(prescription)}
          onModalToggle={
            () => setIsModalOpen(!!isModalOpen)
          }
        />}
    </div>
  );
};

export default Agent;
