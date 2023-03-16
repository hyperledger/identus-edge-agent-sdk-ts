import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import Did from './DID';

@Entity()
export default class DidPair {
  @PrimaryColumn({type: 'text'})
  id?: string; // ID will be hostDID and receiverDID concatenated

  @Column({type: 'text', nullable: true})
  name?: string;

  @Column({type: 'text'})
  hostDID!: string;

  @OneToOne(() => Did)
  @JoinColumn({name: 'hostDID', referencedColumnName: 'did'})
  hostDidEntity!: Did;

  @Column({type: 'text'})
  receiverDID!: string;

  @OneToOne(() => Did)
  @JoinColumn({name: 'receiverDID', referencedColumnName: 'did'})
  receiverDidEntity?: Did;
}
