import { db } from "../config/db.js";

export const findMeetingByEmail = async (leaderEmail) => {
  const [rows] = await db.query(
    "SELECT * FROM bookclub WHERE leaderEmail = ?",
    [leaderEmail]
  );
  return rows[0];
};

export const addNewMeeting = async (
  leaderEmail,
  location,
  date,
  time,
  bookID,
  title
) => {
  const [result] = await db.query(
    "INSERT INTO bookclub (leaderEmail, location, date, time, bookID, title) VALUES (?, ?, ?, ?, ?, ?)",
    [leaderEmail, location, date, time, bookID, title]
  );
  return result;
};

export const fetchAllMeetings = async () => {
  const [rows] = await db.query("SELECT * FROM bookclub");
  return rows;
};

export const addNewMember = async (leaderEmail, memberEmail) => {
  const [result] = await db.query(
    "INSERT INTO bookclubmember (leaderEmail, memberEmail) VALUES (?, ?)",
    [leaderEmail, memberEmail]
  );
  return result;
};

export const fetchAllMembers = async (leaderEmail) => {
  const [rows] = await db.query(
    "SELECT * FROM bookclubmember WHERE leaderEmail = ?",
    [leaderEmail]
  );
  return rows;
};
