import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import Did from './DID';

@Entity()
export default class Mediator {
  @PrimaryColumn({type: 'text'})
  id!: string;

  @Column({type: 'text'})
  mediatorDidId!: string;

  @OneToOne(() => Did)
  @JoinColumn({name: 'mediatorDidId', referencedColumnName: 'Did'})
  mediatorDid!: Did;

  @Column({type: 'text', nullable: true})
  hostDidId?: string;

  @OneToOne(() => Did)
  @JoinColumn({name: 'hostDidId', referencedColumnName: 'Did'})
  hostDid?: Did;

  @Column({type: 'text', nullable: true})
  routingDidId?: string;

  @OneToOne(() => Did)
  @JoinColumn({name: 'routingDidId', referencedColumnName: 'Did'})
  routingDid?: Did;
}