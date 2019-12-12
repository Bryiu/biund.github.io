var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employeetracker"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});
function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add Department",
                "Add role",
                "Add Employee",
                "View",
                "Update"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Add Department":
                    makeDepartment();
                    break;

                case "Add role":
                    makeRole();
                    break;

                case "Add Employee":
                    makeEmployee();
                    break;

                case "View":
                    view();
                    break;

                case "Update":
                    update();
                    break;
            }
        });
}
function makeDepartment() {
    inquirer
        .prompt({
            type: "input",
            message: "What is the Department name?",
            name: "depName"
        })
        .then(function (resu) {
            console.log("Inserting a new department...\n");
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: resu.depName,
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + "Department name\n");
                }
            );
        })
};
function makeRole() {
    inquirer
        .prompt([{

            type: "input",
            message: "What is role title?",
            name: "roleTitle",
        }, {
            type: "input",
            message: "What is the employee's salary?",
            name: "salary",
        }, {
            type: "input",
            message: "What is the Department name?",
            name: "department_id",
        }
    ])
        .then(function (resu) {
            console.log("Inserting a new role...\n");
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: resu.roleTitle,
                    salary: resu.salary,
                    department_id: resu.department_id
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + "@this emp role\n");
                }
            );
        })
};
function makeEmployee() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is the employee's first name?",
            name: "first_name",
        }, {
            type: "input",
            message: "What is the employee's last name?",
            name: "last_name",
        }, {
            type: "input",
            message: "What is the employee's role id?",
            name: "role_id",
        }, {
            type: "input",
            message: "What is the employee's managers id?",
            name: "manager_id",
        }
    ])
        .then(function (resu) {
            console.log("Inserting a new role...\n");
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: resu.first_name,
                    last_name: resu.last_name,
                    role_id: resu.role_id,
                    manager_id: resu.manager_id
                },
                function (err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + "@this emp role\n");
                }
            );
        })
};
function view() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to view?",
            choices: [
                "department",
                "roles",
                "employees"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "department":
                    viewDepartment();
                    break;

                case "roles":
                    viewRoles();
                    break;

                case "employees":
                    viewEmployees();
                    break;
            }
        });
};
function viewDepartment() {
    var query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Position: " +
                res[i].id +
                "Department: " +
                res[i].name
            );
        }
    });
};
function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Position: " +
                res[i].id +
                "Department: " +
                res[i].name
            );
        }
    });
};
function viewEmployees() {
    var query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Id: " +
                res[i].id +
                "Title: " +
                res[i].title +
                "Salary:" +
                res[i].salary +
                "Department id:" +
                res[i].department_id
            );
        }
    });
};