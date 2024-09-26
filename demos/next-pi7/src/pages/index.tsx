import React, { useState } from "react";
import { Patient, Prescription } from "@/types";



const Agent: React.FC = () => {

  const [patient] = useState<Patient>({
    id: "123456",
    name: "John Doe",
    age: 35,
    gender: "Male",
    bloodType: "A+",
    allergies: ["Penicillin", "Peanuts"],
  });

  const [issuedPrescriptions, setIssuedPrescriptions] = useState<Prescription[]>([
    {
      id: "1",
      medication: "Amoxicillin",
      dosage: "500mg",
      frequency: "3 times daily",
      duration: "7 days",
      dateIssued: "2023-04-01",
    },
    {
      id: "2",
      medication: "Ibuprofen",
      dosage: "400mg",
      frequency: "As needed",
      duration: "5 days",
      dateIssued: "2023-03-28",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPrescription, setNewPrescription] = useState<Omit<Prescription, 'id' | 'dateIssued'>>({
    medication: "",
    dosage: "",
    frequency: "",
    duration: "",
  });

  const handlePrescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPrescription((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPrescription = (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0];
    const newIssuedPrescription: Prescription = {
      ...newPrescription,
      id: (issuedPrescriptions.length + 1).toString(),
      dateIssued: currentDate,
    };
    setIssuedPrescriptions((prev) => [...prev, newIssuedPrescription]);
    setIsModalOpen(false);
    setNewPrescription({ medication: "", dosage: "", frequency: "", duration: "" });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">


      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Doctor's Portal</h1>

      {/* Patient Profile */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patient Profile</h2>
        <div className="grid grid-cols-2 gap-4">
          <p><span className="font-medium">Name:</span> {patient.name}</p>
          <p><span className="font-medium">Age:</span> {patient.age}</p>
          <p><span className="font-medium">Gender:</span> {patient.gender}</p>
          <p><span className="font-medium">Blood Type:</span> {patient.bloodType}</p>
          <p><span className="font-medium">Allergies:</span> {patient.allergies.join(", ")}</p>
        </div>
      </div>

      {/* Issued Prescriptions */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Issued Prescriptions</h2>
        {issuedPrescriptions.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {issuedPrescriptions.map((prescription) => (
              <li key={prescription.id} className="py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-medium text-indigo-600">{prescription.medication}</p>
                    <p className="text-sm text-gray-500">Dosage: {prescription.dosage}</p>
                    <p className="text-sm text-gray-500">Frequency: {prescription.frequency}</p>
                    <p className="text-sm text-gray-500">Duration: {prescription.duration}</p>
                  </div>
                  <p className="text-sm text-gray-400">Issued: {prescription.dateIssued}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No prescriptions issued yet.</p>
        )}
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
            <h3 className="text-lg font-medium text-gray-900 mb-4">Issue Prescription</h3>
            <form onSubmit={handleSubmitPrescription}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medication">
                  Medication
                </label>
                <input
                  type="text"
                  id="medication"
                  name="medication"
                  value={newPrescription.medication}
                  onChange={handlePrescriptionChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dosage">
                  Dosage
                </label>
                <input
                  type="text"
                  id="dosage"
                  name="dosage"
                  value={newPrescription.dosage}
                  onChange={handlePrescriptionChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="frequency">
                  Frequency
                </label>
                <input
                  type="text"
                  id="frequency"
                  name="frequency"
                  value={newPrescription.frequency}
                  onChange={handlePrescriptionChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
                  Duration
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={newPrescription.duration}
                  onChange={handlePrescriptionChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit Prescription
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

export default Agent;