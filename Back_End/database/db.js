import mysql from 'mysql2/promise';
import 'dotenv/config';

// Create a pool of connections to MySQL database
const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true, // Enable waiting for connections when none are available
    connectionLimit: 10, // Maximum number of connections in the pool
    queueLimit: 0 // Maximum number of connection requests the pool can queue
});

// Function to test database connection
const testConnection = async () => {
    try {
        const connection = await db.getConnection();
        connection.release(); // Release the connection back to the pool
        console.log("Connected to database");
    } catch (e) {
        console.error("Database connection failed", e);
    }
};

// Function to execute SQL queries
const query = async (sql, values) => {
    try {
        const [rows, fields] = await db.query(sql, values ?? []);
        return rows;
    } catch (e) {
        console.error("Query execution failed", e);
        throw e; // Re-throw the error to be handled by the caller
    }
};

export { testConnection, query };
