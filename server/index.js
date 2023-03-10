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



app.get('/api/login', (req, res) => {
    const { email, password } =  req.body;
    const sql = "SELECT * from user_db WHERE email=? , password=?";
    db.query(sql, [email, password], (error, user) => {
        if (error) {
            console.log(error);
        }
        res.send(result)
    });
})


app.post('/api/register', (req, res) => {
    const { name, email, password } =  req.body;
    const sql = "INSERT INTO user_db ( name, email, password) Values (?, ?, ?)";
    db.query(sql, [name, email, password], (error, result) => {
        if (err) {
            console.log(err);
        }
    });
});

app.get("/api/get", (req, res) => {
    const sql = "SELECT * FROM contact_db";
    db.query(sql, (error, result) => {
        res.send(result);
    });
});

app.post("/api/post", (req, res) => {
    const {name, email, contact} = req.body;
    const sql = "INSERT INTO contact_db (name, email, contact) Values (?, ?, ?)";
    db.query(sql, [name, email, contact], (error, result) => {
        if (err) {
            console.log(err);
        }
    });
});


app.delete("/api/delete/:id", (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM contact_db WHERE id = ?";
    db.query(sql, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    });
});


app.get("/api/get/:id", (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM contact_db WHERE id = ?";
    db.query(sql, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result)
    });
});


app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
    const {name, email, contact} = req.body;
    const sql = "UPDATE contact_db SET name = ?, email = ?, contact = ? WHERE id = ?";
    db.query(sql, [name, email, contact, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result)
    });
});



app.listen(5000, () => {
    console.log("server is running on port 5000")
})
