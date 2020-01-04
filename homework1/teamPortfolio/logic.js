const inquirer = require("inquirer");
const fs = require("fs");
const store = require("./store.json");

inquirer
    .prompt([
    {
        message: "What is the employees role?",
        name: "typeEmployee",
        choices: ["Manager", "Engineer", "Intern", "Employee"],
    },
    {
        message: "Enter the employee's name?",
        name: "name",
    },
    {
        message: "What is the employees id number?",
        name: "id",
    },
    {
        message: "What is the employees office number?",
        name: "phone",
    },
    {
        message: "What is the employee's github?",
        name: "github",
    },
    {
        message: "What is the employees school?",
        name: "school"
    },
    {
        message: "Complete?",
        name: "complete",
        choices: ["y", "n"]
    }
])
.then(function (answers) {
    if (answers.typeEmployee == "Manager") {
        class Manager {
            constructor() {
                this.answers.username = username;
                this.answers.choices = role;
                this.answers.id = id;
                this.answers.phone = phone;
                this.answers.github = github;
                this.answers.school = school;
                var manLit = `
                        <div class="employee">
                <p id="name">Name:${Manager.getName}</p>
                <p id="role">Role:${Manager.getRole}</p>
                <p id="id">Id:${Manager.getId}</p>
                <p id="email">Email:${Manager.getEmail}</p>
                <p id="school">School:${Manager.school}</p>
                <p id="github">Github:${Manager.github}</p>
                <p id="number">Phone:${Manager.phone}</p>
            </div>`;
            }
        }
        const jsonString = JSON.stringify(manLit)
        fs.writeFileSync("store.json",store, jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
        manager = new Manager(answers);
    }
   else if (answers.typeEmployee == "Engineer") {
        class Engineer {
            constructor() {
                this.answers.username = username;
                this.answers.choices = role;
                this.answers.id = id;
                this.answers.phone = phone;
                this.answers.github = github;
                this.answers.school = school;
                var engLit = `
                        <div class="employee">
                <p id="name">Name:${Engineer.getName}</p>
                <p id="role">Role:${Engineer.getRole}</p>
                <p id="id">Id:${Engineer.getId}</p>
                <p id="email">Email:${Engineer.getEmail}</p>
                <p id="school">School:${Engineer.school}</p>
                <p id="github">Github:${Engineer.github}</p>
                <p id="number">Phone:${Engineer.phone}</p>
            </div>`;
            }
        }
        const jsonString = JSON.stringify(engLit)
        fs.writeFileSync("store.json",store, jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
        engineer = new Manager(answers);
    }
    else if (answers.typeEmployee == "Intern") {
        class Intern {
            constructor() {
                this.answers.username = username;
                this.answers.choices = role;
                this.answers.id = id;
                this.answers.phone = phone;
                this.answers.github = github;
                this.answers.school = school;
                var intLit = `
                        <div class="employee">
                <p id="name">Name:${Intern.getName}</p>
                <p id="role">Role:${Intern.getRole}</p>
                <p id="id">Id:${Intern.getId}</p>
                <p id="email">Email:${Intern.getEmail}</p>
                <p id="school">School:${Intern.school}</p>
                <p id="github">Github:${Intern.github}</p>
                <p id="number">Phone:${Intern.phone}</p>
            </div>`;
            }
        }
        const jsonString = JSON.stringify(intLit)
        fs.writeFileSync("store.json",store, jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
        intern = new Manager(answers);
    }
    else if (answers.typeEmployee == "Employee") {
        class Employee {
            constructor() {
                this.answers.username = username;
                this.answers.choices = role;
                this.answers.id = id;
                this.answers.phone = phone;
                this.answers.github = github;
                this.answers.school = school;
                var empLit = `
                        <div class="employee">
                <p id="name">Name:${Employee.getName}</p>
                <p id="role">Role:${Employee.getRole}</p>
                <p id="id">Id:${Employee.getId}</p>
                <p id="email">Email:${Employee.getEmail}</p>
                <p id="school">School:${Employee.school}</p>
                <p id="github">Github:${Employee.github}</p>
                <p id="number">Phone:${Employee.phone}</p>
            </div>`;
            }
        }
        const jsonString = JSON.stringify(empLit)
        fs.writeFileSync("store.json",store, jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
        employee = new Manager(answers);
    }

    if (answers.complete == "y") {
        var div = "<div>";
        

        // join array of objects HTML in one html string. ie: htmlString 
        // fs.read the main.html (template)
        // replace the {{ contents }} handlebar WITH htmlString
        // fs.write new team.html with htmlString
    }
    
})













// class Employee {
//     constructor() {
//         this.answers.username = username;
//         this.answers.choices = role;
//         this.answers.id = id;
//         this.answers.phone = phone;
//         this.answers.github = github;
//         this.answers.school = school;
//         var empLit = `
//                 <div class="employee">
//         <p id="name">Name:${Employee.getName}</p>
//         <p id="role">Role:${Employee.getRole}</p>
//         <p id="id">Id:${Employee.getId}</p>
//         <p id="email">Email:${Employee.getEmail}</p>
//         <p id="school">School:${Employee.school}</p>
//         <p id="github">Github:${Employee.github}</p>
//         <p id="number">Phone:${Employee.phone}</p>
//     </div>`;
//     }
// }

// fs.writeFile("main.html", empLit, manLit, engLit, intLit, function (err) {
//     if (err) {
//         throw err;
//     }

//     var readHtml = fs.readFileSync('main.html', 'utf8');
//     var options = { format: 'Letter' };

//     this.append(readHtml, options).toFile('main.html', function (err, res) {
//         if (err) return console.log(err);
//         console.log(res);
//     });
//     console.log(`Saved`);
// });

// switch (inqRes) {
//     case "Employee":
//         generateEmployee()
//         break;
//     case "Manager":
//         generateManager()
//         break;
//     case "Engineer":
//         generateEngineer()
//         break;
//     case "Intern":
//         generateIntern()
//         break;

//     default:
//         generateQuestions()
// }