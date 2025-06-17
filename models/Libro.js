import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  anio: {
    type: Number,
  },
  genero: {
    type: String,
  },
  cantidad: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Libro = mongoose.model("Libro", libroSchema);
export default Libro;
