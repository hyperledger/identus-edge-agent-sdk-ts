import React, { useState } from "react";
import { VerificationRequest } from "@/types";


const Pharmacy: React.FC = () => {

    // Dummy verification requests
    const [verificationRequests, setVerificationRequests] = useState<VerificationRequest[]>([
        {
            id: "1",
            patientName: "John Doe",
            prescriptionDetails: "Amoxicillin 500mg, 3 times daily for 7 days",
            status: "Pending",
            dateRequested: "2023-04-01",
        },
        {
            id: "2",
            patientName: "Jane Smith",
            prescriptionDetails: "Lisinopril 10mg, once daily",
            status: "Verified",
            dateRequested: "2023-03-28",
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newRequest, setNewRequest] = useState({
        patientName: "",
        prescriptionDetails: "",
    });

    const handleRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewRequest((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmitRequest = (e: React.FormEvent) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];
        const newVerificationRequest: VerificationRequest = {
            id: (verificationRequests.length + 1).toString(),
            patientName: newRequest.patientName,
            prescriptionDetails: newRequest.prescriptionDetails,
            status: "Pending",
            dateRequested: currentDate,
        };
        setVerificationRequests((prev) => [...prev, newVerificationRequest]);
        setIsModalOpen(false);
        setNewRequest({ patientName: "", prescriptionDetails: "" });
    };

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-indigo-700 mb-6">Pharmacy Verification Portal</h1>

            {/* Verification Requests List */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Verification Requests</h2>
                {verificationRequests.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {verificationRequests.map((request) => (
                            <li key={request.id} className="py-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-lg font-medium text-indigo-600">{request.patientName}</p>
                                        <p className="text-sm text-gray-500">{request.prescriptionDetails}</p>
                                        <p className="text-sm text-gray-400">Requested: {request.dateRequested}</p>
                                    </div>
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                        request.status === 'Verified' ? 'bg-green-100 text-green-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {request.status}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No verification requests yet.</p>
                )}
            </div>

            {/* Create New Request Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Create New Verification Request
            </button>

            {/* New Request Modal */}
            {isModalOpen && (
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
                                    value={newRequest.patientName}
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
                                    value={newRequest.prescriptionDetails}
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
        </div>
    );
};

export default Pharmacy;