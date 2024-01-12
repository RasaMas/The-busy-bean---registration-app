import mysql from "mysql";

const connection = mysql.createConnection({
  host: "your-hostname",
  user: "your-username",
  password: "your-password",
  database: "your-database-name",
});

// connection.connect((err) => {
//   if (err) {
//     console.log("Database connection failed:" + err.stack);
//     return;
//   }
//   console.log("Connected to the database.");
// });

export default connection;
