import cors from "@fastify/cors";
import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  origin: true, // todas Urls de front-end poderão acessar nosso back-end
  // origin: ['hom-services.unimedprudente.com.br', 'services.unimedprudente.com.br'] <= exemplo para o "mundo real"
});
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server Started");
  });
