import {Buffer} from "buffer";
import "reflect-metadata";
import * as localforage from 'localforage';

if (window.Buffer === undefined) window.Buffer = Buffer;
// @ts-ignore
// window.SQL = wasm;
window.SQL = window.initSqlJs;
// @ts-ignore
window.localforage = localforage;