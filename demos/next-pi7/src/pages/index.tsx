import React, { useState } from "react";
import { Patient, Prescription } from "@/types";

async function fetchPrescriptions(): Promise<Prescription[]> {
  throw new Error("TODO");
}

async function issuePrescription(): Promise<Prescription> {
  throw new Error("TODO");
}

const HealthcareCardanoLogo: React.FC<{ className?: string }> = ({
  className,
}) => {
  // Circle arrangement based on the Cardano logo
  const circleConfig = [
    { count: 12, radius: 40 },
    { count: 11, radius: 32.5 },
    { count: 8, radius: 25 },
    { count: 6, radius: 17.5 },
    { count: 4, radius: 10 },
    // Center circle(s) omitted since the cross covers it
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circles pattern matching the Cardano logo */}
      {circleConfig.map((ring, ringIndex) => {
        const { count, radius } = ring;
        return (
          <g key={ringIndex}>
            {Array.from({ length: count }).map((_, circleIndex) => {
              const angle = (circleIndex / count) * 2 * Math.PI;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <circle
                  key={circleIndex}
                  cx={x}
                  cy={y}
                  r="2.5"
                  fill="#1E3A8A"
                />
              );
            })}
          </g>
        );
      })}

      {/* Central healthcare symbol (thicker cross on top of circles) */}
      <g transform="translate(50, 50)">
        <rect x="-15" y="-37.5" width="30" height="75" fill="#fc3a3a" />
        <rect x="-37.5" y="-15" width="75" height="30" fill="#fc3a3a" />
      </g>
    </svg>
  );
};

const HealthCard: React.FC<{ patient: Patient }> = ({ patient }) => {
  const url = `https://i.pravatar.cc/150?u=${patient.id + patient.name}`
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden mb-6">
      <div className="bg-indigo-700 h-24 flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-white">Health Card</h2>
      </div>
      <div className="p-6">
        <div className="flex items-center">
          <img
            className="w-24 h-24 rounded-full mr-4 border-2 border-indigo-700"
            src={url}
            alt="Patient Avatar"
          />
          <div>
            <p className="text-xl font-bold text-gray-800">{patient.name}</p>
            <p className="text-gray-600">ID: {patient.id}</p>
          </div>
        </div>
        <div className="mt-4 text-gray-700">
          <p>
            <span className="font-medium">Age:</span> {patient.age}
          </p>
          <p>
            <span className="font-medium">Gender:</span> {patient.gender}
          </p>
          <p>
            <span className="font-medium">Blood Type:</span> {patient.bloodType}
          </p>
          <p>
            <span className="font-medium">Allergies:</span>{" "}
            {patient.allergies.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

const Agent: React.FC = () => {
  const [patient] = useState<Patient>({
    id: "123456",
    name: "John Doe",
    age: 35,
    gender: "Male",
    bloodType: "A+",
    allergies: ["Penicillin", "Peanuts"],
  });

  const [issuedPrescriptions, setIssuedPrescriptions] = useState<
    Prescription[]
  >([
    {
      id: "1",
      prescriptionName: "Amoxicillin",
      prescriptionDetails: "",
      dosage: "500mg",
      quantity: 1,
      issuanceDate: new Date(),
      expirationDate: new Date(),
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [
    newPrescription,
    setNewPrescription,
  ] = useState<Omit<Prescription, "id" | "dateIssued">>({
    prescriptionName: "",
    prescriptionDetails: "",
    dosage: "",
    quantity: 0,
    issuanceDate: new Date(),
    expirationDate: new Date(),
  });

  const handleSubmitPrescription = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
        <HealthcareCardanoLogo className="w-12 h-12 mr-2" /> Healthcare Portal
      </h1>

      {/* Main content in two columns */}
      <div className="flex flex-wrap -mx-3 mb-6">
        {/* Health Card */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <HealthCard patient={patient} />
        </div>

        {/* Issued Prescriptions */}
        <div className="w-full md:w-1/2 px-3">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Issued Prescriptions
            </h2>
            {issuedPrescriptions.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {issuedPrescriptions.map((prescription) => (
                  <li key={prescription.id} className="py-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-lg font-medium text-indigo-600">
                          {prescription.prescriptionName}
                        </p>
                        <p className="text-sm text-gray-500">
                          Description: {prescription.prescriptionDetails}
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
                          Issued: {prescription.issuanceDate.toDateString()}
                        </p>
                        <p className="text-sm text-gray-400">
                          Expires: {prescription.expirationDate.toDateString()}
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

      {/* Prescription Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Issue New Prescription
      </button>

      {/* Prescription Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Issue Prescription
            </h3>
            <form onSubmit={handleSubmitPrescription}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="prescriptionName"
                >
                  Prescription
                </label>
                <input
                  type="text"
                  id="prescriptionName"
                  name="prescriptionName"
                  value={newPrescription.prescriptionName}
                  onChange={(e) =>
                    setNewPrescription({
                      ...newPrescription,
                      prescriptionName: e.target.value,
                    })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              {/* Other form fields */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="prescriptionDetails"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="prescriptionDetails"
                  name="prescriptionDetails"
                  value={newPrescription.prescriptionDetails}
                  onChange={(e) =>
                    setNewPrescription({
                      ...newPrescription,
                      prescriptionDetails: e.target.value,
                    })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* Dosage */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dosage"
                >
                  Dosage
                </label>
                <input
                  type="text"
                  id="dosage"
                  name="dosage"
                  value={newPrescription.dosage}
                  onChange={(e) =>
                    setNewPrescription({
                      ...newPrescription,
                      dosage: e.target.value,
                    })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              {/* Quantity */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={newPrescription.quantity}
                  onChange={(e) =>
                    setNewPrescription({
                      ...newPrescription,
                      quantity: Number(e.target.value),
                    })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              {/* Issuance Date */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="issuanceDate"
                >
                  Prescribed At
                </label>
                <input
                  type="date"
                  id="issuanceDate"
                  name="issuanceDate"
                  value={newPrescription.issuanceDate
                    .toISOString()
                    .substr(0, 10)}
                  onChange={(e) =>
                    setNewPrescription({
                      ...newPrescription,
                      issuanceDate: new Date(e.target.value),
                    })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              {/* Expiration Date */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="expirationDate"
                >
                  Expiration
                </label>
                <input
                  type="date"
                  id="expirationDate"
                  name="expirationDate"
                  value={newPrescription.expirationDate
                    .toISOString()
                    .substr(0, 10)}
                  onChange={(e) =>
                    setNewPrescription({
                      ...newPrescription,
                      expirationDate: new Date(e.target.value),
                    })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              {/* Buttons */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit Prescription
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default Agent;
