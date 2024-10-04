


export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  bloodType: string;
  allergies: string[];
}

export interface Prescription {
  patientIdentifier: string,
  medicationName: string,
  dosage: string,
  quantity: number,
  prescribingDoctor: string,
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
