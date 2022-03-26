
var now = new Date();

var nowStr = now.toDateString(); 


var currentMonth = nowStr.split(' '); 
const headerArea = document.getElementById("Month");
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

var month = now.getUTCMonth() + 1;
var year = now.getUTCFullYear();
console.log(month);

headerArea.innerText = currentMonth[1] + " " + currentMonth[2] + " " + now.getFullYear(); 

var clockArea = document.createElement("div");
clockArea.className = "clock";
headerArea.appendChild(clockArea);   

const mondayheader = document.getElementById("monday");
const theuheader = document.getElementById("theusday");
const wednheader = document.getElementById("wednesday");
const thursheader = document.getElementById("thursday");
const fridheader = document.getElementById("friday");
const saturdheader = document.getElementById("saturday");
const sunheader = document.getElementById("sunday");


var getDaysInMonth = function() {
   daysInMonth = new Date(year, month , 0).getDate();
   return daysInMonth;
  
  };





function DefaultGrid()
{
   
    makeColomn(getDaysInMonth() + 1);
}




function makeColomn(colmNum)
{
   
      for (let s = 1; s < colmNum; s++) {
       
        let cell = document.createElement("div");

        var noww = new Date(year, month - 1, s);

        var nowStrs = noww.toLocaleString(); 

        var currentMonthh = nowStrs.split(' '); 

        var weekday = noww.toLocaleString("default", { weekday: "long" })



        cell.innerText = s.toString();

            if(weekday == "Monday")
            {

           

                if(s == Number(currentMonth[2]))
                {
                    mondayheader.appendChild(cell).className = "cellCurent";
                }else{
                    mondayheader.appendChild(cell).className = "cell";
                }

            }

            if(weekday == "Tuesday")
            {

           

                if(s == Number(currentMonth[2]))
                {
                    theuheader.appendChild(cell).className = "cellCurent";
                }else{
                    theuheader.appendChild(cell).className = "cell";
                }

            }
            if(weekday == "Wednesday")
            {

           

                if(s == Number(currentMonth[2]))
                {
                    wednheader.appendChild(cell).className = "cellCurent";
                }else{
                    wednheader.appendChild(cell).className = "cell";
                }

            }

            if(weekday == "Thursday")
            {

           

                if(s == Number(currentMonth[2]))
                {
                    thursheader.appendChild(cell).className = "cellCurent";
                }else{
                    thursheader.appendChild(cell).className = "cell";
                }

            }

            if(weekday == "Friday")
            {

           

                if(s == Number(currentMonth[2]))
                {
                    fridheader.appendChild(cell).className = "cellCurent";
                }else{
                    fridheader.appendChild(cell).className = "cell";
                }

            }

            if(weekday == "Saturday")
            {

           

                if(s == Number(currentMonth[2]))
                {
                    saturdheader.appendChild(cell).className = "cellCurent";
                }else{
                    saturdheader.appendChild(cell).className = "cell";
                }

            }

            if(weekday == "Sunday")
            {

           

                if(s == Number(currentMonth[2]))
                {
                    sunheader.appendChild(cell).className = "cellCurent";
                }else{
                    sunheader.appendChild(cell).className = "cell";
                }

            }


        
    

   
      }   
    
}


function makeHeaderDate()
{
    headerArea.innerText = currentMonth[1] + " " + currentMonth[2] + " " + now.getFullYear(); 
}









setInterval(function() {
    var nowww = new Date();
    clockArea.innerText = nowww.getHours().toString() + ":" + nowww.getMinutes().toString() + ":" + nowww.getSeconds().toString();


}, 1000);




function GetNextMonth()
{


}

window.onload = function()
{

   
    DefaultGrid();
}


