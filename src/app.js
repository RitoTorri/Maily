// Importación de dependencias
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./docs/swagger.js";
import morgan from "morgan";

// Importación de rutas
import senderRouter from "./modules/users/sender.route.js";

// Configuración de variables de entorno
dotenv.config();

export class App {
  // Atributos
  app;
  port;

  // Inicializacion de atributos
  constructor() {
    this.app = new express();
    if (process.env.MODE === "development") {
      this.port = process.env.PORT || 3000;
    }
    this.middlewares();
    this.urls = {
      sender: `/sender`,
    };
    this.routes();
  }

  middlewares = () => {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
        message:
          "Too many requests from this IP, please try again in 15 minutes",
      }),
    );
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));

    // Swagger UI
    if (process.env.MODE === "development") {
      this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }
  };

  routes = () => {
    this.app.use(this.urls.sender, senderRouter);
  };

  start = () => {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
      console.log(`API available at http://localhost:${this.port}/api-docs`);
    });
  };
}
