import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import Did from './DID';

@Entity()
export default class Mediator {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({type: 'text'})
  mediatorDidId!: string;

  @OneToOne(() => Did)
  @JoinColumn({name: 'mediatorDidId', referencedColumnName: 'did'})
  mediatorDid!: Did;

  @Column({type: 'text', nullable: true})
  hostDidId!: string;

  @OneToOne(() => Did)
  @JoinColumn({name: 'hostDidId', referencedColumnName: 'did'})
  hostDid!: Did;

  @Column({type: 'text', nullable: true})
  routingDidId!: string;

  @OneToOne(() => Did)
  @JoinColumn({name: 'routingDidId', referencedColumnName: 'did'})
  routingDid!: Did;
}