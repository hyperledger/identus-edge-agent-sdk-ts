import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

interface Fields {
  id: string;
  did: string;
  method: string;
  methodId: string;
  schema: string;
  alias?: string;
}

@Entity()
export default class Did {
  static fields: Fields = {
    id: 'id',
    did: 'did',
    method: 'method',
    methodId: 'methodId',
    schema: 'schema',
    alias: 'alias',
  };
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  @Column({type: 'text', unique: true, nullable: false})
  did?: string;
  @Column({type: 'text', nullable: false})
  method?: string;
  @Column({type: 'text', nullable: false})
  methodId?: string;
  @Column({type: 'text', nullable: false})
  schema?: string;
  @Column({type: 'text', nullable: true})
  alias?: string;
}