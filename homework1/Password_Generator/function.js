var ysp = document.getElementById("ysp");
var gp = document.getElementById("gp");
var cc = document.getElementById("cc");

gp.addEventListener("click", function makeid(length){
var charachterLength = parseInt(prompt("How many charachters would you like in your password?"));
    if ((charachterLength) < 8) {
        alert("Selection too low");}
    else if ((charachterLength) > 128) {
        alert("Selection too high");}   
    else((charachterLength));   
        

var special = confirm("Would you like special charachters?");
if (special=true) {
   tank.push('"',"!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~");
}
    else {false};
    
var numeric = confirm("Would you like numeric characters?");
    if (true){
    tank.push("0","1","2","3","4","5","6","7","8","9");
       }
    else{};

var lowerCase = confirm("Would you like lowercase charachters?");
    if (true){
    tank.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    }
    else{};

var capital = confirm("Would you like capital charachters?");
    if (true){
        tank.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
    }
    else{};
});



 ysp.innerHTML = result


//to fill an empty array with numbers
// var arr = new Array();
// arr.push('value1');
// arr.push('value2');

//to get a random number. use for extra button if have time
// Math.floor(Math.random() *6)+1
//6 is the length and 1 is the starting point