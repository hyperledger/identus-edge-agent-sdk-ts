import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity({name: "verifiable_credential"})
export default class VerifiableCredential {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({type: 'text', nullable: true})
  credentialType?: string;

  @Column({type: 'text', nullable: true})
  expirationDate?: string;

  @Column({type: 'text', nullable: true})
  issuanceDate?: string;

  @Column({type: 'text'})
  verifiableCredentialJson!: string;

  @Column({type: 'text'})
  issuerDIDId!: string;
}
