import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
    host: "localhost",
    user: "sky",
    password: "70E7jz3&p",
    database: "admin_sky"
});

db.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
  });
  