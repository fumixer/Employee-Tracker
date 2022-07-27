const mypass = process.env['MY_ULTRA_SECURE_PASS'];
const mysql = require (`mysql2`)

const connection = mysql.createConnection({
    host: '127.0.0.1',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: `MikaHappy2022`,
    database: 'EmployeeDatabase'
})

connection.connect(function (err) {
    if (err) throw err
})

module.exports = connection