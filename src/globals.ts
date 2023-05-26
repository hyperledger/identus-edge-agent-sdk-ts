import SQL from "sql.js/dist/sql-wasm.js";
import localforage from "localforage";

if (typeof window !== "undefined") {
  (window as any).SQL = SQL;
  (window as any).localforage = localforage;
}
