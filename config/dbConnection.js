const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'sql3.freemysqlhosting.net',
        user: 'sql3330825',
        password: 'uU5vpElNkF',
        database: 'sql3330825'
    });
}