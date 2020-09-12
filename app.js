const express = require('express')
,     app = express()
,     mysql = require('mysql')
,     util = require('util')
,     path = require('path')
,     port = 3000

// .env
require('dotenv').config()

// MySQL
const db =  mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

db.connect((err) => {
    if (err) { throw err;}
    console.log('Connecté au serveur MySQL');
});

const query = util.promisify(db.query).bind(db);
global.query = query;

// Middleware - Parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Router
app.use(require('./routes/router'))
 
// Listen
app.listen(port, () => {
  console.log(`Tourne sur le port : ${port}`);
});