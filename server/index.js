const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql');
const cors = require("cors");


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_contact"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/api/get", (req, res) => {
    const sql = "SELECT * FROM contact_db";
    db.query(sql, (error, result) => {
        res.send(result);
    });
});


app.get("/", (req, res) => {
    const sql =
     "INSERT INTO contact_db (name, email, contact) VALUES ('ahmed', 'ahmed@gmail.com', 987159)";
    db.query(sql, (error, result) => {
        console.log("error", error);
        console.log("result", result);
        res.send("Hello Clediss");
    });
});

app.listen(5000, () => {
    console.log("server is running on port 5000")
})
