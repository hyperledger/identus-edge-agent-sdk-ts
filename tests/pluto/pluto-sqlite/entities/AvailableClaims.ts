import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "availableclaims" })
export default class AvailableClaims {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text" })
  credentialId!: string;

  @Column({ type: "text" })
  claim!: string;
}
