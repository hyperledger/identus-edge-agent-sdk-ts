import { Pluto } from "..";

export class LinkSecret implements Pluto.Storable {
  static defaultName = "default";

  public uuid?: string;

  constructor(
    public readonly secret: string,
    public readonly name: string = LinkSecret.defaultName
  ) {}
}
