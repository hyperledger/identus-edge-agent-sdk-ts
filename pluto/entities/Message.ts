import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity("Message")
export default class Message {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({type: 'text'})
  createdTime!: string;

  @Column({type: 'text'})
  dataJson!: string;

  @Column({type: 'text'})
  from!: string;

  @Column({type: 'text', nullable: true})
  thid?: string;

  @Column({type: 'text'})
  to!: string;

  @Column({type: 'text', nullable: true})
  type?: string;

  @Column({type: 'int', default: 0})
  isReceived!: number;
}
