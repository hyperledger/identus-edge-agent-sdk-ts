


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
  prescriptionName: string;
  prescriptionDetails: string;
  dosage: string;
  quantity: number;
  issuanceDate: Date,
  expirationDate: Date
}

export interface VerificationRequest {
  id: string;
  dosage: string,
  quantity: number,
  prescriptionName: string,
  prescriptionDetails: string;
  issuanceDate: number,
  expirationDate: number,
  status: "Pending" | "Verified" | "Failed";
}
