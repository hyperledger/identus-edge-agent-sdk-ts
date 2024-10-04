import React from "react";
import { Patient } from "@/types";

export const HealthCard: React.FC<{ patient: Patient }> = ({ patient }) => {
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