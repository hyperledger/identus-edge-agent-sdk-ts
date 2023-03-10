import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import Did from './DID';

@Entity()
export default class VerifiableCredential {
  @PrimaryColumn({type: 'text'})
  id!: string;

  @Column({type: 'text', nullable: true})
  credentialType?: string;

  @Column({type: 'text', nullable: true})
  expirationDate?: string;

  @Column({type: 'text', nullable: true})
  issuanceDate?: string;

  @Column({type: 'text'})
  verifiableCredentialJson!: string;

  @Column({type: 'text', nullable: true})
  issuerDIDId?: string;

  @OneToOne(() => Did)
  @JoinColumn({name: 'issuerDIDId', referencedColumnName: 'did'})
  issuerDID?: Did;
}
