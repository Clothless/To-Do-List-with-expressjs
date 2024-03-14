const mysql = require('mysql2');
const db = require('../config/db_config');

const pool = mysql.createPool(db);

function query(sql, args) {
    return new Promise((resolve, reject) =>
        pool.query(sql, args, (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        })
    );
}

module.exports = { query };



