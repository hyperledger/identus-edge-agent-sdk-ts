import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity("DidPair")
export default class DidPair {
  @PrimaryColumn({type: 'text'})
  id?: string; // ID will be hostDID and receiverDID concatenated

  @Column({type: 'text', nullable: true})
  name?: string;

  @Column({type: 'text'})
  hostDID!: string;

  @Column({type: 'text'})
  receiverDID!: string;
}
