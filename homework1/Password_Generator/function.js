var ysp = document.getElementById("ysp");
var gp = document.getElementById("gp");
var cc = document.getElementById("cc");
tank=[];

gp.addEventListener("click", function makeid(length){
var charachterLength = parseInt(prompt("How many charachters would you like in your password?"));
    if ((charachterLength) < 8) {
        alert("Selection too low");}
    else if ((charachterLength) > 128) {
        alert("Selection too high");}   
    else((charachterLength));   
        
    function name(tank){
confirm("Would you like special charachters?");
if (confirm = true){
    var special = ('"',"!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~");
    console.log(special);
}
    else {false};
}
    function numeric1(tank){
confirm("Would you like numeric characters?");
    if (confirm=true){
    var numeric =("0","1","2","3","4","5","6","7","8","9");
       }
    else{};
    console.log(numeric);
    }
function lowerCase(tank){
confirm("Would you like lowercase charachters?");
    if (true){
    var lowerCase = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    }
    else{};
console.log(lowerCase);
} 
function capital1(tank){
confirm("Would you like capital charachters?");
    if (true){
    var capital =("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
    }
    else{};
    console.log(capital);
}
});



 ysp.innerHTML = result


//to fill an empty array with numbers
// var arr = new Array();
// arr.push('value1');
// arr.push('value2');

//to get a random number. use for extra button if have time
// Math.floor(Math.random() *6)+1
//6 is the length and 1 is the starting point