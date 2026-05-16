import { SenderServices } from "./sender.service.js";
import { SenderController } from "./sender.controller.js";

const senderService = new SenderServices();
const senderController = new SenderController();

export {  senderService, senderController };
