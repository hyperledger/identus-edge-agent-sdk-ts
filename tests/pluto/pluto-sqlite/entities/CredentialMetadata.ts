import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "credentialmetadata" })
export default class CredentialMetadata {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text", nullable: false })
  nonce!: string;

  @Column({ type: "text", nullable: false })
  link_secret_name!: string;

  @Column({ type: "text", nullable: false })
  link_secret_blinding_data!: string;
}
