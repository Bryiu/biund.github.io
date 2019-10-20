var hours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
var rowContent = document.getElementsByClassName("hour").value;
var saveFunc = document.getElementById("textarea");

if (localStorage.getItem("time-block")) {
  saveFunc.value = localStorage.getItem("time-block");
}

function store() {
  console.log("here");

  localStorage.setItem("time-block", saveFunc.value);
  document.getElementsByClassName("time-block").innerHTML = localStorage.getItem("text");
};
$("#whoop").on("click", store);

function change() {
  var timeFormat = "HH";
    if (moment(timeFormat) > rowContent) {
      $(".row").css(".future");
    } else if (moment(timeFormat) < rowContent) {
      $(".row").css(".past");
    } else if (moment(timeFormat)===rowContent) {
      $(".row").css("past");
    }
  }
;
$(".row").ready(function () {
  change();
});


// $(document).ready(function () {
//   emea();
// });
// function getExpireDate(ele) {
//   var i = null;
//   for (i = 0; cccr_mems.length > i; i++) {


//   if (cccr_mems[i].Name == ele.value) {

//      var exDate = moment(cccr_mems[i].cccrEXP, 'YYYY.MM.DD');

//      if (moment().isAfter(exDate)) {
//         //$(ele).css('color', "#A3005B");
//         $(ele).css('background', "#A3005B");
//      } else {
//         $(ele).css('background', "#275052");
//         //$(ele).css('color', "#275052");
//   }

//    return cccr_mems[i].cccrEXP;
//   }
// }
// return '';

  // Store
//   localStorage.setItem("lastname", "Smith");
  // Retrieve
//   document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// ar div = document.getElementById( 'div_id' );
// div.onmouseover = function() {
//   this.style.backgroundColor = 'green';
//   var h2s = this.getElementsByTagName( 'h2' );
//   h2s[0].style.backgroundColor = 'blue';
// };


