const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const pdf = require('html-pdf');

inquirer
    .prompt([
        {
            message: "Enter the github username",
            name: "username",
        },
        {
           
            message: "What is your favorite color",
            name: "bcolor"
        }
    ])
    .then(function (inqRes) {




        queryUrl = `https://api.github.com/users/${inqRes.username}`;

        axios.get(queryUrl).then(function (res) {

            const profile = {
                image: res.data.avatar_url,
                name: res.data.name,
                location: res.data.location,
                gitProf: res.data.html_url,
                blog: res.data.blog,
                bio: res.data.bio,
                star: ("api.github.com/users/"+inqRes.username+"/starred").length,
                numRepo: res.data.public_repos,
                followers: res.data.followers,
                following: res.data.following,
            };
            // "api.github.com/users/{username}/starred?.lenght      
console.log(profile.star);
            const page = `
<!DOCTYPE html>
<html lang="en">

<head>
<style>
.body{
    background-color: ${inqRes.username};
    
}
.container{
    background-color: ${inqRes.bcolor};
    border-radius: 5px;
}
.bio{
    background-color: darkkhaki;
    border-radius: 5px;
}
.profileImage{
    height: 300px;
    width: 300px;
    background-color: lightseagreen;
    margin-left: 38%;
    border-radius: 5px;
}
h1{
    margin-left: 50%;
    margin-top: 8px;
}
#userName{
    font-size: 36px;
    font-weight: 700;
    text-align: center;

}
.location{
    background-color: darkkhaki;
    margin: 10px;
    border-radius: 5px;
}
.github{
    background-color: darkkhaki;
    margin: 10px;
    border-radius: 5px;
}
.blog{
    background-color: darkkhaki;
    margin: 10px;
    border-radius: 5px;
}
.repo{
    background-color: darkkhaki;
    margin: 10px;
    height: 200px;
    text-align: center;
    font-size: 36pt;
    font-weight: 700;
    border-radius: 5px;
}
.followers{
    background-color: darkkhaki;
    margin: 10px;
    height: 200px;
    text-align: center;
    font-size: 36pt;
    font-weight: 700;
    border-radius: 5px;
}
.stars{
    background-color: darkkhaki;
    margin: 10px;
    height: 200px;
    text-align: center;
    font-size: 36pt;
    font-weight: 700;
    border-radius: 5px;
}
.following{
    background-color: darkkhaki;
    margin: 10px;
    height: 200px;
    text-align: center;
    font-size: 36pt;
    font-weight: 700;
    border-radius: 5px;
}
</style>  
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <title>pdfGenerator</title>
</head>

<body>
<div class="container">
<div class="profileImage"><img src="${profile.image}"height="300px"width="300px"></div>
<h1>Hi!</h1>
<p id="userName">My name is ${profile.name}</p><br>
<div class="row row1">
    <div class="col-3"></div>
    <div class="col-2 location">
        <p id="location">${profile.location}</p>
    </div>
    <div class="col-md-2 github">${profile.gitProf}</div>
    <div class="col-md-2 blog">Blog:${profile.blog}</div>
    <div class="col-md-3"></div>
</div>
</div>
<div class="row 2">
<div class="col-md-2"></div>
<div class="col-md-4 repo">Repo<br>${profile.numRepo}
</div>
<div class="col-md-4 followers">Followers<br>${profile.followers}
</div>
<div class="col-md-2"></div>
</div>
<div class="row 3">
<div class="col-md-2"></div>
<div class="col-md-4 stars">Stars<br>${profile.star}
</div>
<div class="col-md-4 following">Following<br>${profile.following}
</div>
<div class="col-md-2"></div>
</div>
<script src="logic.js"></script>
</body>
</html>
`;
            fs.writeFile("profile.html", page, function (err) {
                if (err) {
                    throw err;
                }

                var readHtml = fs.readFileSync('profile.html', 'utf8');
                var options = { format: 'Letter' };

                pdf.create(readHtml, options).toFile('profile.pdf', function (err, res) {
                    if (err) return console.log(err);
                    console.log(res);
                });


                console.log(`Saved`);
            });

        });
    });