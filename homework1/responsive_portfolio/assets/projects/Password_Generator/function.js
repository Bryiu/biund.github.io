var ysp = document.getElementById("ysp");
var gp = document.getElementById("gp");
var cc = document.getElementById("cc");
var reset = document.getElementById("reset");
var password = ("");
var jumble = ("");
var tank=[];


gp.addEventListener("click", function makeid(){
var charachterLength = parseInt(prompt("How many charachters would you like in your password?"));
    if (charachterLength < 8) {
        alert("Selection too low");
    charachterLength = parseInt(prompt("How many charachters would you like in your password?"));
    }    
    else if (charachterLength > 128) {
        alert("Selection too high");
    charachterLength = parseInt(prompt("How many charachters would you like in your password?"));
    }   
    else{
    } 

    var special = confirm("Would you like special charachters?");
        if (special === true){
        var special1 = ['"',"!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
        tank=tank.concat(special1);
    }
    var numeric = confirm("Would you like numeric characters?");
        if (numeric===true){
        var numeric1 =["0","1","2","3","4","5","6","7","8","9"];
        tank=tank.concat(numeric1);
    }
    var lowerCase = confirm("Would you like lowercase charachters?");
        if (lowerCase===true){
        var lowerCase1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        tank=tank.concat(lowerCase1);
        }
    var capital = confirm("Would you like capital charachters?");
        if (capital===true){
        var capital1 =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        tank=tank.concat(capital1);
        }
    for (i=0; i<charachterLength; i++){
      var jumble =  Math.floor(Math.random() *tank.length);
      password = password + tank[jumble];
    }
    ysp.innerHTML = password;
});

reset.addEventListener("click", function toReset(){
    tank = [];
    password = ("");
    ysp.innerHTML = password;
});

cc.addEventListener("click", function clipboard(){
    var password = document.querySelector("cc");
    password.select();
    document.execCommand("Copy");
    alert("Your password ="+ password.value + "was copied to clipboard");
    clipboard();
});

//to fill an empty array with numbers
// var arr = new Array();
// arr.push('value1');
// arr.push('value2');

//to get a random number. use for extra button if have time
// Math.floor(Math.random() *6)+1
//6 is the length and 1 is the starting point