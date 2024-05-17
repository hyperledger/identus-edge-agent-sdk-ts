import { Pluto } from "../buildingBlocks/Pluto";

export class LinkSecret implements Pluto.Storable {
  static defaultName = "default";

  public readonly uuid = Pluto.makeUUID();

  constructor(
    public readonly secret: string,
    public readonly name: string = LinkSecret.defaultName
  ) {}
}
