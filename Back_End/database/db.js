import mysql from 'mysql2/promise';
import 'dotenv/config';

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

const testConnection = async () => {
    try {
        await db.getConnection();
        console.log("Connected to database");
    } catch (e) {
        console.log("Database connection failed", e);
    }
};

const query = async (query, values) => {
    try {
        const [result] = await db.query(query, values ?? []);
        return result;
    } catch (e) {
        console.log("Query failed", e);
    }
};

export { testConnection, query };
