import { db } from "../config/db.js";

export const findReadingBooks = async (ownerEmail, holderEmail) => {
  const [rows] = await db.query(
    `SELECT id, bookID FROM userlibrary WHERE (ownerEmail = ? OR holderEmail = ?) AND status = "reading"`,
    [ownerEmail, holderEmail]
  );
  return rows;
};

export const findFinishedBooks = async (ownerEmail, holderEmail) => {
  const [rows] = await db.query(
    `SELECT id, bookID FROM userlibrary WHERE (ownerEmail = ? OR holderEmail = ?) AND status = "finished"`,
    [ownerEmail, holderEmail]
  );
  return rows;
};

export const findLendedBooks = async (ownerEmail) => {
  const [rows] = await db.query(
    `SELECT id, bookID FROM userlibrary WHERE ownerEmail = ? AND  isBorrowed = true`,
    [ownerEmail]
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
