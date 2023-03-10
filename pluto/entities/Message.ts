import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export default class Message {
  @PrimaryColumn({type: 'text'})
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
