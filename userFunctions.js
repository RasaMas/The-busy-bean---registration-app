import connection from './db';

function getAllUsers(callback) {
    const selectQuery = `SELECT * FROM users`;

    connection.query(selectQuery, (err, results) => {
        if (err) {
            console.error('Error fetching users:' + err.stack);
            return callback(err, null);
        }
        return callback(null, results);
    });
}

export default { getAllUsers };