
const {prompt} = require (`inquirer`);
//https://medium.com/simply-complex/why-curly-brackets-are-used-in-javascript-react-and-node-js-programming-972082a4aa99
const db = require("./db");
require (`console.table`);

init();

// initial function at NPM start
function init() {
    menu();
}

function menu () {
    //inquirer.prompt to ask what action the user wants to take
    prompt([
        {
            // Load following prompts on npm start
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },

                {
                    name: "Add a Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add a Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Add an Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
 // Ste:in the .then, you'll send them to the appropriate function based on what they chose
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_DEPARTMENT":
                createDepartment();
                break;
            case "ADD_ROLE":
                createRole();
                break;
            case "ADD_EMPLOYEE":
                createEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;
            default:
                quit();
        }
    }
    )
}

//viewDepartments()

// function viewDepartments() {
//     db.findDepts()
//     .then(([depts]) => {
//         console.table(depts)
//         menu();
//     })
// }

// View all deparments
function viewDepartments() {
    //connect to db/index.js
    db.findDepts()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
        })
        .then(() => menu());
}

// View all employees
function viewEmployees() {
    //connect to db/index.js
    db.findEmployee()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        .then(() => menu());
}

// View all roles
function viewRoles() {
    //connect to db/index.js
    db.findRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
        })
        .then(() => menu());
}


// Quit the application
function quit() {
    process.exit();
}



//view all employees
//view all roles
//view all departments
//Add a role
//Add a department
//Add employee
//update an employee role

//What would you like to do? - 
// - View all employees
// - Add Employee
// - Update Employee Role
// - View All Roles
// - Add role
// - View All Departments
// - Add Department
//What is the name of the department?
//What is the name of the role?
// - Sales Lead
// - Lead Engineer
// - Account Manager
// - Accountant
// - Leagal Team lead
// - Customer service
// - Production manager
// - Logistics manager
//What is the salary of the role?
//Which department does the role belong to?
// - Engineering
// - Finance
// - Legal
// - Sales
// - Production
// - Logistics
//What would like to do? - Add Employee
//What is the employee`s first name?
//What is the employee`s last name?
//What is the employee`s role?
//Who is the employee`s manager?
//What would you like to do?
//Which employee`s role do you want to update?
//Which role do you want to assign the selected employee?
//What would you like to do? - view all employees

