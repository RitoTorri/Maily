import { Router } from "express";
import { senderController } from "./index.js";
import { registerValidator } from "./validators.js";

const router = Router();

/**
 * @swagger
 * /sender:
 *   post:
 *     summary: Enviar correo
 *     description: Envía un correo a un destinatario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               to:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: email
 *                   example: example@example.com
 *               subject:
 *                 type: string
 *                 example: Asunto del correo electrónico
 *               text:
 *                 type: string
 *                 example: <p>Este es un ejemplo de un correo electrónico</p>
 *     responses:
 *       200:
 *         description: Correo enviado correctamente
 *       422:
 *         description: Errores en los datos enviados
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", registerValidator, senderController.sendEmail);

router.get("/test", (req, res) => {
  res.json({ message: "La API está funcionando correctamente en producción" });
});

export default router;
