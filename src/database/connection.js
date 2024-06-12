import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "laravel-api_task",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
