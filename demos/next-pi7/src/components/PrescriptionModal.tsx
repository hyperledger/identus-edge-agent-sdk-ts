import { Prescription } from "@/types";
import React, { useState } from "react";

type PrescriptionModal = {
    onSubmit: (prescription: Prescription) => void,
    onModalToggle: () => void
}

export const PrescriptionModal: React.FC<PrescriptionModal> = ({ onModalToggle, onSubmit }) => {
    const handleSubmitPrescription = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            patientIdentifier,
            medicationName,
            dosage,
            quantity,
            prescribingDoctor,
            issuanceDate: new Date(issuanceDate),
            expirationDate: new Date(expirationDate)

        })
    };

    const [
        patientIdentifier, setPatientIdentifier,
    ] = useState<string>('');

    const [
        medicationName, setMedicationName,
    ] = useState<string>('');

    const [
        dosage, setDosage,
    ] = useState<string>('');

    const [
        quantity, setQuantity,
    ] = useState<number>(0);

    const [
        prescribingDoctor, setPrescribingDoctor,
    ] = useState<string>('');

    const [
        issuanceDate, setIssuanceDate,
    ] = useState<string>('');

    const [
        expirationDate, setExpirationDate,
    ] = useState<string>('');

    return <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
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
                        value={medicationName}
                        onChange={(e) => setMedicationName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
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
                        value={dosage}
                        onChange={(e) =>
                            setDosage(e.target.value)
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
                        value={quantity}
                        onChange={(e) =>
                            setQuantity(parseInt(e.target.value))
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
                        value={issuanceDate}
                        onChange={(e) =>
                            setIssuanceDate(e.target.value)
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
                        value={expirationDate}
                        onChange={(e) =>
                            setExpirationDate(e.target.value)
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
                        onClick={onModalToggle}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
}