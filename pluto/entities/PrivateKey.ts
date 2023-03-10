import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import Did from './DID';

@Entity()
export default class PrivateKey {
  @PrimaryColumn({type: 'text'})
  id!: string;

  @Column({type: 'text'})
  curve!: string;

  @Column({type: 'text'})
  privateKey!: string;

  @Column({type: 'int', default: 0})
  keyPathIndex!: number;

  @Column({type: 'text'})
  didId!: string;

  @OneToOne(() => Did)
  @JoinColumn({name: 'didId', referencedColumnName: 'did'})
  did!: Did;
}
