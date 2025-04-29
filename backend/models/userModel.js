import { db } from "../config/db.js";

export const findUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

export const createUser = async (name, email, hashedPassword, location) => {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password, location) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, location]
  );
  return result;
};
