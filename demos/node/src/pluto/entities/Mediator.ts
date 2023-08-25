import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "mediator" })
export default class Mediator {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text" })
  mediatorDidId!: string;

  @Column({ type: "text", nullable: true })
  hostDidId!: string;

  @Column({ type: "text", nullable: true })
  routingDidId!: string;
}
