import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "did" })
export default class Did {
  @PrimaryColumn({ type: "text", nullable: false })
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
