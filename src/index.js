import dotenv from "dotenv";
import { App } from "./app.js";
dotenv.config();
const appInstance = new App();

if (process.env.MODE === "development") {
  appInstance.start();
}

export default appInstance.app;
