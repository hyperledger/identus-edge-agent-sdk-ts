import SDK from "sdk";;

/**
 * demo app state
 */
export interface State {
  AgentDC?: SDK.Agent;
  mediatorDID?: string;
  notifications: Record<string, boolean>;
  components: {
    Apollo?: SDK.Apollo;
    Castor?: SDK.Castor;
  };
}
