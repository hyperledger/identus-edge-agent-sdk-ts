


export interface Patient {
    id: string;
    name: string;
    age: number;
    gender: string;
    bloodType: string;
    allergies: string[];
}

export interface Prescription {
    id: string;
    medication: string;
    dosage: string;
    frequency: string;
    duration: string;
    dateIssued: string;
}

export interface VerificationRequest {
    id: string;
    patientName: string;
    prescriptionDetails: string;
    status: "Pending" | "Verified" | "Rejected";
    dateRequested: string;
}