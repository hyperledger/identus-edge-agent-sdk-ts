import express from "express";
import http from "http";

const port = 3000;
const app = express();
app.use(express.json());

http.createServer(app).listen(port);

console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
