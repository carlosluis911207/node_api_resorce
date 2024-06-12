import userResource from "../Resources/user.resource.js";
import pool from "../database/connection.js";

// Obtener todos los usuario
export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");

    res.json(userResource(result[0]));
  } catch (error) {
    console.log(error);
    throw { status: 500, message: "Error al obtener users" };
  }
};

// Obtener detalles de un usuario por ID
export const getUserById = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = ?", [
      req.params.id,
    ]);
    if (result[0][0]) {
      res.json(userResource(result[0][0]));
    }
    res.json("Usuario no encontrado...");
  } catch (error) {
    console.error(error);
    throw { status: 500, message: "Error al obtener detalles del estudiante" };
  }
};
