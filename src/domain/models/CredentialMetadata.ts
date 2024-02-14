import { Pluto } from "../buildingBlocks/Pluto";
import { CredentialType } from "./VerifiableCredential";

export class CredentialMetadata implements Pluto.Storable {
  public readonly uuid = Pluto.makeUUID();

  constructor(
    public readonly type: CredentialType,
    public readonly name: string,
    private readonly json: Record<string, any>
  ) {}

  /**
   * Check the CredentialType of this Metadata
   * 
   * @param type 
   * @returns 
   */
  isType(type: CredentialType): boolean {
    return this.type === type;
  }

  /**
   * Get the raw CredentialMetadata JSON
   * 
   * @returns JSON
   */
  toJSON(): Record<string, any> {
    return this.json;
  }
}