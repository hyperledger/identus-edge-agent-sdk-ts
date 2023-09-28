import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "linksecret" })
export default class LinkSecret {
  @PrimaryColumn({ type: "text", unique: true })
  id!: string;
}
