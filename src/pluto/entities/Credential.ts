import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "credential" })
export default class Credential {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text" })
  recoveryId!: string;

  @Column({ type: "text" })
  credentailData!: string;

  @Column({ type: "text", nullable: true })
  issuer?: string;

  @Column({ type: "text", nullable: true })
  subject?: string;

  @Column({ type: "text", nullable: true })
  credentialCreated?: string;

  @Column({ type: "text", nullable: true })
  credentialUpdated?: string;

  @Column({ type: "text", nullable: true })
  credentialSchema?: string;

  @Column({ type: "text", nullable: true })
  validUntil?: string;

  @Column({ type: "int", default: 0 })
  revoked?: number;
}
