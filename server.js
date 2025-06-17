import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import libroRoutes from "./routes/libroRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba raíz
app.get("/", (req, res) => {
  res.send("📚 API de libros funcionando correctamente");
});

// Rutas de libros
app.use("/api/libros", libroRoutes);

// Conexión y levantamiento del servidor
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(
        `🚀 Servidor corriendo en http://localhost:${process.env.PORT}`
      )
    );
  })
  .catch((error) => console.error("❌ Error de conexión:", error));
