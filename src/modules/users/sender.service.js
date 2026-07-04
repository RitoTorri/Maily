import "dotenv/config"; // 1. Carga las variables del .env primero que nada
import nodemailer from "nodemailer"; // 2. Carga la librería real para enviar correos

export class SenderServices {
  constructor() {}

  async sendEmail({ to, subject, text }) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_SENDER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const emailOptions = {
        from: `"${process.env.EMAIL_USERNAME}" <${process.env.EMAIL_SENDER}>`,
        to,
        subject,
        html: text,
      };

      const info = await transporter.sendMail(emailOptions);

      console.log("¡CORREO ENVIADO!");
      console.log("ID del mensaje:", info.messageId);
      console.log(
        "📬 Revisa tu bandeja de entrada (o la carpeta de Spam por si acaso).",
      );

      return {
        statusCode: 200,
        message: "Email sent successfully",
      };
    } catch (error) {
      throw error;
    }
  }
}
