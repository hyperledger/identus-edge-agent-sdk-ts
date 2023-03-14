import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class PrivateKey {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({type: 'text'})
  curve!: string;

  @Column({type: 'text'})
  privateKey!: string;

  @Column({type: 'int', default: 0})
  keyPathIndex!: number;

  @Column({type: 'text'})
  didId!: string;
}
