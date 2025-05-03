import { db } from "../config/db.js";

export const findReadingBooks = async (email) => {
  const [rows] = await db.query(
    `SELECT id, bookID FROM userlibrary WHERE (ownerEmail = ? OR holderEmail = ?) AND status = "reading"`,
    [email, email]
  );
  return rows;
};

export const findFinishedBooks = async (email) => {
  const [rows] = await db.query(
    `SELECT id, bookID FROM userlibrary WHERE (ownerEmail = ? OR holderEmail = ?) AND status = "finished"`,
    [email, email]
  );
  return rows;
};

export const findLendedBooks = async (email) => {
  const [rows] = await db.query(
    `SELECT id, bookID FROM userlibrary WHERE ownerEmail = ? AND  isBorrowed = true`,
    [email]
  );
  return rows;
};

export const addNewBook = async (bookID, ownerEmail, holderEmail) => {
  const [result] = await db.query(
    "INSERT INTO userlibrary (bookID, ownerEmail, holderEmail) VALUES (?, ?, ?)",
    [bookID, ownerEmail, holderEmail]
  );
  return result;
};

export const changeStatus = async (bookID) => {
  const [result] = await db.query(
    "UPDATE userlibrary SET status = 'finished' WHERE bookID = ?",
    [bookID]
  );
  return result;
};

export const changeLike = async (bookID) => {
  const [result] = await db.query(
    "UPDATE userlibrary SET isLiked = true WHERE bookID = ? AND status = 'finished'",
    [bookID]
  );
  return result;
};

export const findLiked = async (email) => {
  const [rows] = await db.query(
    `SELECT id, bookID FROM userlibrary WHERE (ownerEmail = ? OR holderEmail = ?) AND isLiked = true`,
    [email, email]
  );
  return rows;
};
