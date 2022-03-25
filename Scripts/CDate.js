//Set the header With the month name and date

//Get the date
var now = new Date();
//Convert it to string
var nowStr = now.toDateString(); 

//Split the string
var currentMonth = nowStr.split(' '); 


//Set the text data of the header to the month name and date
document.getElementById("Month").innerText = currentMonth[1] + " " + currentMonth[2];


const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
window.addEventListener("load", () => {
    // (B1) DATA ARRAY
    var data = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"]
    ];
   
    // (B2) LOOP + ADD CELLS
   
    for (let i of data) { for (let j of i) {
      let cell = document.createElement("div");
      cell.innerHTML = j;
      cell.className = "cell";
      container.appendChild(cell);
    }}
  });
