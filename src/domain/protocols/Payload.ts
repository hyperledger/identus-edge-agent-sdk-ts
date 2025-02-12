/**
 * General purpose struct to pass data around
 * 
 * enables simplistic data transfer and identification
 */
export interface Payload {
  // Payload IDentifier
  pid: string;
  // any value
  data: any;
}

export namespace Payload {
  export const make = (pid: string, data: any): Payload => ({ pid, data });
}
