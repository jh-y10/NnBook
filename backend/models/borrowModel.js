import { db } from "../config/db.js";

export const FetchNewBookLend = async (
  libraryID,
  location,
  startTime,
  endTime
) => {
  const [result] = await db.query(
    "INSERT INTO registerbooklend (libraryID, location, startTime, endTime) VALUES (?, ?, ?, ?)",
    [libraryID, location, startTime, endTime]
  );
  return result;
};

export const changeLendStatus = async (libraryID) => {
  const [result] = await db.query(
    "UPDATE userlibrary SET isLendable = true WHERE ID = ?",
    [libraryID]
  );
  return result;
};

export const fetchAllBookLend = async () => {
  const [rows] = await db.query("SELECT * FROM registerbooklend");
  return rows;
};

export const FetchBorrowReq = async (bookID, libraryID, requesterEmail) => {
  const [result] = await db.query(
    "INSERT INTO bookborrowrequest (bookID, libraryID, requesterEmail) VALUES (?, ?, ?)",
    [bookID, libraryID, requesterEmail]
  );
  return result;
};

export const SendNotification = async (
  receiverEmail,
  senderEmail,
  type,
  message
) => {
  const [result] = await db.query(
    "INSERT INTO notifications (receiverEmail, senderEmail, type, message) VALUES (?, ?, ?, ?)",
    [receiverEmail, senderEmail, type, message]
  );
  return result;
};
