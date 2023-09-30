const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// データベース接続
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// ルート設定
app.get('/', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) throw err;
    res.render('index.ejs', { items: results });
  });
});

// 他のルートとデータベース操作の設定...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
