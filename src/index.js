var React = require("react");
var ReactDOM = require("react-dom");

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
var datetime = date + " " + time;

console.log(datetime);

var day = today.getDay();
console.log(day);

let text = "";

// (0-6)sunday:0, ,monday:1 .... saturday:6
if (day === 0 || day === 6) {
  text = "Weekend";
} else {
  text = "Weekday";
}
ReactDOM.render(
  <div>
    <p>Today is {text}</p>
  </div>,
  document.getElementById("root")
);
