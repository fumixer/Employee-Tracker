const connection = require (`./connection`)

class DB {
    constructor (connection) {
        this.connection = connection;
    }

    findDepts () {
        return this.connection.promise().query(
            "SELECT department.id, department.name FROM department;"
        )
     };
    
    findEmployee() {
    return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name From employee;"
        )
    };
    
    findRoles() {
    return this.connection.promise().query(
        "SELECT roles.id, roles.title From roles;"
        )
    };
}

module.exports = new DB (connection)