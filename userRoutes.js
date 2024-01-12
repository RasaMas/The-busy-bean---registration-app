import express from "express";
import connection from "./db.js";

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

router.post("/register", (req, res) => {
  const { name, surname, email, age, birthday } = req.body;
  const insertQuery = `INSERT INTO users (name, surname, email, age, birthday) VALUES (?, ?, ?, ?, ?)`;
  connection.query(
    insertQuery,
    [name, surname, email, age, birthday],
    (err, results) => {
      if (err) {
        console.error("Error inserting into users table:" + err.stack);
        res.status(500).send("Internal Server Error.");
      }
      const userId = results.insertId;
      res.status(201).json({ id: userId, name, surname, email, age, birthday });
    }
  );
});

router.get("/users", (req, res) => {
  const selectQuery = `SELECT * FROM users`;
  connection.query(selectQuery, (err, results) => {
    if (err) {
      console.error("Error fetching users:" + err.stack);
      res.status(500).send("Internal Server Error.");
    }
    res.json(results);
  });
});

router.put("/update/:userId", (req, res) => {
  const userId = req.params.userId;
  const { name, surname, email, age, birthday } = req.body;
  const updateQuery = `UPDATE users SET name = ?, surname = ?, email = ?, age =?, birthday = ? WHERE id = ?`;

  connection.query(
    updateQuery,
    [name, surname, email, age, birthday, userId],
    (err, results) => {
      if (err) {
        console.error("Error updating user:" + err.stack);
        res.status(500).send("Internal Server Error.");
        return;
      }
      res.status(200).send("User updated succesfully.");
    }
  );
});

router.delete("/delete/:userId", (req, res) => {
  const userId = req.params.userId;
  const deleteQuery = `DELETE FROM users WHERE id = ?`;

  connection.query(deleteQuery, [userId], (err, results) => {
    if (err) {
      console.error("Error deleting user:" + err.stack);
      res.status(500).send("Internal Server Error.");
      return;
    }
    res.status(200).send("User deleted succesfully.");
  });
});

export default router;
