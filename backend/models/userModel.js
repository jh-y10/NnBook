import { db } from "../config/db.js";

export const findUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM userinfo WHERE email = ?", [
    email,
  ]);
  return rows[0];
};

export const createUser = async (
  email,
  name,
  hashedPassword,
  location,
  favGenre
) => {
  const [result] = await db.query(
    "INSERT INTO userinfo (email, name, password, location) VALUES (?, ?, ?, ?)",
    [email, name, hashedPassword, location, favGenre]
  );
  return result;
};

export const findAllUsers = async () => {
  const [rows] = await db.query("SELECT email, name, location FROM userinfo");
  return rows;
};

export const createFavGenre = async (email, genre) => {
  const [result] = await db.query(
    "INSERT INTO usergenre (email, genre) VALUES (?, ?)",
    [email, genre]
  );
  return result;
};
