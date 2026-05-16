import { body } from "express-validator";
import { validateFields } from "../../shared/middlewares/capture_errors.js"; // Asegúrate de tener este middleware

export const registerValidator = [
  // Validación de 'to' como Array de correos
  body("to")
    .isArray({ min: 1 })
    .withMessage(
      "El campo 'to' debe ser un arreglo con al menos un destinatario",
    ),

  // Validamos cada email dentro del arreglo
  body("to.*")
    .isEmail()
    .withMessage("Uno o más correos en el listado no tienen un formato válido"),

  body("subject")
    .trim()
    .notEmpty()
    .withMessage("El asunto no puede estar vacío")
    .isLength({ max: 100 })
    .withMessage("El asunto es demasiado largo"),

  body("text").trim().notEmpty().withMessage("El mensaje no puede estar vacío"),

  validateFields,
];
