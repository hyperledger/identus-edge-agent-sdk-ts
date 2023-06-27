import { Column, Entity } from "typeorm";

@Entity({ name: "linksecret" })
export default class LinkSecret {
  @Column({ type: "text", unique: true })
  id!: string;
}
