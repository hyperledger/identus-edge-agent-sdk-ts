import { KeyCurve } from "./KeyCurve";

export interface PrivateKey {
  keyCurve: KeyCurve;
  value: string;
}
