import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Maily",
      version: "1.0.0",
      description: "API REST para enviar correos electrónicos",
      contact: {
        name: "Jesus Cortez",
        url: "https://cortez-porfolio.netlify.app/",
        email: "cortezfrancisco025@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: "Servidor de desarrollo",
      },
    ],
  },
  apis: ["./src/modules/**/*.js"],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
