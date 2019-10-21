$(document).ready(function () {
  var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
  var saveFunc = document.getElementById("textarea");
  if (localStorage.getItem("time-block")) {
    saveFunc.value = localStorage.getItem("time-block");
  };

  function store() {
    console.log("here");

    localStorage.setItem("time-block", saveFunc.value);
    document.getElementsByClassName("time-block").innerHTML = localStorage.getItem("text");
  };
  $("#whoop").on("click", store);

  var looloo = moment().format('LL');
  $("#currentDay").text(looloo);
  var guru = moment().format('HH');
  console.log(guru);

  function change() {

    for (i = 0; i < hours.length; i++) {
      if (hours[i] > guru) {
        $("#" + hours[i]).addClass("future");
      } else if (hours[i] < guru) {
        $("#" + hours[i]).addClass("past");
      } else if (hours[i] === guru) {
        $("#" + hours[i]).addClass("present");
      }
    }
  };
  change();
});