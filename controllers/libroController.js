import Libro from "../models/Libro.js";

// Crear un libro
export const crearLibro = async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save();
    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los libros
export const obtenerLibros = async (req, res) => {
  try {
    const { autor, genero, ordenar } = req.query;

    let filtro = {};
    if (autor) filtro.autor = autor;
    if (genero) filtro.genero = genero;

    let query = Libro.find(filtro);

    if (ordenar === "titulo") query = query.sort("titulo");
    if (ordenar === "anio") query = query.sort("anio");

    const libros = await query;
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener libro por ID
export const obtenerLibro = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar libro
export const actualizarLibro = async (req, res) => {
  try {
    const libroActualizado = await Libro.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(libroActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar libro
export const eliminarLibro = async (req, res) => {
  try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
