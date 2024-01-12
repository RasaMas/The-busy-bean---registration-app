import connection from './db';

const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    birthday DATE NOT NULL,
)
`;

connection.query(createTableQuery, (err) => {
    if (err) {
        console.error('Error creating users table:' + err.stack);
        return;
    }
    console.log('Users table created or already exists.');
    connection.end();
});