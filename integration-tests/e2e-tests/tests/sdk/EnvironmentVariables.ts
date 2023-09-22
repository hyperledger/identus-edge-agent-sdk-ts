import {configDotenv} from "dotenv"

configDotenv()

export class EnvironmentVariables {
  public static mediatorOobUrl: string = process.env.MEDIATOR_OOB_URL!
  public static agentUrl: string = process.env.PRISM_AGENT_URL!
  public static publishedDid: string = process.env.PUBLISHED_DID!
  public static schemaId: string = process.env.SCHEMA_ID!
  public static apiKey: string | undefined  = process.env.APIKEY
}
