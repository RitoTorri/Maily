import { senderService } from "./index.js";
import {
  responseSuccess,
  responseError,
} from "../../shared/utils/responses.js";

export class SenderController {
  constructor() { }

  async sendEmail(req, res) {
    try {
      const { to, subject, text } = req.body;
      const result = await senderService.sendEmail({ to, subject, text });
      return responseSuccess(res, result);
    } catch (error) {
      return responseError(res, { message: error.message, code: 500 });
    }
  }
}
