import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vunamnguyen123",
    database: "react_project"
})