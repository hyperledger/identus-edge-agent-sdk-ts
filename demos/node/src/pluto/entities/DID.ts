import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "did" })
export default class Did {
  @PrimaryGeneratedColumn("uuid")
  id?: string;
  @Column({ type: "text", unique: true, nullable: false, primary: true })
  did!: string;
  @Column({ type: "text", nullable: false })
  method?: string;
  @Column({ type: "text", nullable: false })
  methodId?: string;
  @Column({ type: "text", nullable: false })
  schema?: string;
  @Column({ type: "text", nullable: true })
  alias?: string | null;
}
