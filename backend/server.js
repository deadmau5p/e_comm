const express =  require('express');
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql');
const cors = require('cors')

var connection  = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database:'trgovina'
})

connection.connect();

app.use(cors())

app.use(express.static('assets'))



app.get("/", (req, res) => {
    res.send('Hello world!')
})

app.get("/items", (req, res) => {
    let sql = "SELECT * FROM produkt";
    connection.query(sql, (err, rows, fileds) => {
        if(err) throw err;
        res.send(rows)
    })
})


app.get("/items/:item", (req, res) => {
    console.log("tu se dela")
    let sql;
    if(req.params.item !== "male" && req.params.item !== "female")
    {
        if(req.params.item === "pants")
        {
            console.log("vredu")
            sql = `SELECT * FROM produkt WHERE kategorija = "Hlace"`
        }
        if(req.params.item === "socks")
        {
            sql = `SELECT * FROM produkt WHERE kategorija = "Nogavice"`
        }
        if(req.params.item === "tops")
        {
            sql = `SELECT * FROM produkt WHERE kategorija = "Puloverji"`
        }

        connection.query(sql, (err, rows, fields) => {
            console.log(sql)
            if(err) throw err;
            console.log(rows)
            res.send(rows);
        })
    }
    else 
    {
        res.send("hello world")
    }

    
})



app.get("/izd/:id", (req, res) => {
    let sql = `SELECT * FROM produkt WHERE idprodukt=${req.params.id}`;

    connection.query(sql, (err, rows, fields) => {
        if(err) throw err;
        res.send(rows)
    })
})


app.get("/users", (req, res) => {
    connection.query('SELECT * FROM stranka', function(err,rows,fields){
        if(err) throw err;
        res.send(rows)
    })

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
