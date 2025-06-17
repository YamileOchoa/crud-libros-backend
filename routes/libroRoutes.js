import express from "express";
import {
  crearLibro,
  obtenerLibros,
  obtenerLibro,
  actualizarLibro,
  eliminarLibro,
} from "../controllers/libroController.js";

const router = express.Router();

router.get("/", obtenerLibros);
router.get("/:id", obtenerLibro);
router.post("/", crearLibro);
router.put("/:id", actualizarLibro);
router.delete("/:id", eliminarLibro);

export default router;
