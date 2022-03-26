

  
  var now = new Date();

  var nowStr = now.toDateString(); 


  
  
  var currentMonth = nowStr.split(' '); 
  const headerArea = document.getElementById("Month");
  const container = document.getElementById("container");
  let rows = document.getElementsByClassName("gridRow");
  let cells = [];
  
  var month = now.getUTCMonth() + 1;
  var year = now.getUTCFullYear();

  headerArea.innerText = currentMonth[1] + " " + currentMonth[2] + " " + now.getFullYear(); 
  var clockArea = document.getElementById("Clock");
  //clockArea.className = "clock";
  //headerArea.appendChild(clockArea); 


var mondayheader = document.getElementById("Monday");
var theuheader = document.getElementById("Theusday");
var wednheader = document.getElementById("Wednesday");
var thursheader = document.getElementById("Thursday");
var fridheader = document.getElementById("Friday");
var saturdheader = document.getElementById("Saturday");
var sunheader = document.getElementById("Sunday");


var getDaysInMonth = function(years, months) {
   daysInMonth = new Date(years, months , 0).getDate();
   return daysInMonth;
  
  };








var itsOnMonday = true;
var firstofMonthison = "Monday";
var lasttofMonthison = "Monday";
function makeColomn(colmNum, months)
{
   
    for (let s = 1; s < colmNum; s++) 
    {
       
        let cell = document.createElement("div");
        cells.push(cell);
        var noww = new Date(year, months - 1, s);

        var nowStrs = noww.toLocaleString(); 

        var currentMonthh = nowStrs.split(' '); 

        var weekday = noww.toLocaleString("default", { weekday: "long" })

     
       
            switch(weekday)
            {
                case "Monday":
                    if(s == 1)
                    {
                        itsOnMonday = true;
                    }
                break;

                case "Tuesday":

                    if(s == 1)
                    {
                        itsOnMonday = false;
                        firstofMonthison = "Tuesday";
                    }

                    if(getDaysInMonth(year, months) == s)
                    {
                        lasttofMonthison = "Tuesday";
                    }

                   
                break;

                case "Wednesday":
                    if(s == 1)
                    {
                        itsOnMonday = false;
                        firstofMonthison = "Wednesday";
                    }

                    if(getDaysInMonth(year, months) == s)
                    {
                        lasttofMonthison = "Wednesday";
                    }
                break;

                case "Thursday":
                    if(s == 1)
                    {
                        itsOnMonday = false;
                        firstofMonthison = "Thursday";
                    }

                    if(s == getDaysInMonth(year, months))
                    {
                        lasttofMonthison = "Thursday";
                       
                    }
                break;

                case "Friday":
                    if(s == 1)
                    {
                        itsOnMonday = false;
                        firstofMonthison = "Friday";
                    }

                    
                    if(getDaysInMonth(year, months) == s)
                    {
                        lasttofMonthison = "Friday";
                    }
                break;

                case "Saturday":
                    if(s == 1)
                    {
                        itsOnMonday = false;
                        firstofMonthison = "Saturday";
                    }

                     
                    if(getDaysInMonth(year, months) == s)
                    {
                        lasttofMonthison = "Saturday";
                    }
                break;

                case "Sunday":
                    if(s == 1)
                    {
                        itsOnMonday = false;
                        firstofMonthison = "Sunday";
                    }

                    if(getDaysInMonth(year, months) == s)
                    {
                        lasttofMonthison = "Sunday";
                    }
                break;

            }

        
            switch(firstofMonthison)
            {
                case "Tuesday":
                    wednheader.className = "goToTop";
                    thursheader.className = "goToTop";
                    fridheader.className = "goToTop";
                    saturdheader.className = "goToTop";
                    sunheader.className = "goToTop";

                break;
                case "Wednesday":

                    thursheader.className = "goToTop";
                    fridheader.className = "goToTop";
                    saturdheader.className = "goToTop";
                    sunheader.className = "goToTop";

                break;
                case "Thursday":

                    fridheader.className = "goToTop";
                    saturdheader.className = "goToTop";
                    sunheader.className = "goToTop";
                   

                break;
                case "Friday":
                    saturdheader.className = "goToTop";
                    sunheader.className = "goToTop";

                break;
                case "Saturday":

                    sunheader.className = "goToTop";

                break;

                case "Sunday":

                    wednheader.className = "goToTop";
                    thursheader.className = "goToTop";
                    fridheader.className = "goToTop";
                    saturdheader.className = "goToTop";
                break;
                

            }


            switch(lasttofMonthison)
            {
                case "Tuesday":
                    theuheader.className = "header";
                    mondayheader.className = "header";
                break;
                case "Wednesday":

                    wednheader.className = "header";
                    theuheader.className = "header";
                    mondayheader.className = "header";
                break;
                case "Thursday":
                    thursheader.className = "header";
                    wednheader.className = "header";
                    theuheader.className = "header";
                    mondayheader.className = "header";
                break;

                case "Friday":
                    thursheader.className = "header";
                    wednheader.className = "header";
                    theuheader.className = "header";
                    mondayheader.className = "header";
                    fridheader.className = "header";
                break;
                case "Saturday":
                    thursheader.className = "header";
                    wednheader.className = "header";
                    theuheader.className = "header";
                    mondayheader.className = "header";
                    fridheader.className = "header";
                    saturdheader.className = "header";
                break;
                case "Sunday":
                    thursheader.className = "header";
                    wednheader.className = "header";
                    theuheader.className = "header";
                    mondayheader.className = "header";
                    fridheader.className = "header";
                    saturdheader.className = "header";
                    sunheader.className = "header";
                break;

            }

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


function getCurentDate()
{
    headerArea.className = "info";
    makeColomn(getDaysInMonth(year, month) + 1, month);
  
}

var currentMonths = month;

function Clear()
{
        for (let index = 0; index < cells.length; index++) 
        {
            var node = cells[index];
            
            node.parentNode.removeChild(node);
        }
        cells.length = 0;
}



function GetNextMonth()
{
    currentMonths = currentMonths + 1;
    console.log(currentMonths);
   
    var now = new Date(year, currentMonths, 0);

    var nowStr = now.toDateString(); 
    
    
    var currentMonthss = nowStr.split(' '); 
    headerArea.innerText = currentMonthss[1] + " " + currentMonth[2] + " " + now.getFullYear(); 

    Clear();
    var noww = new Date();
    
    if(currentMonths <= month) 
    {
        headerArea.className = "info";
    }else
    {
        headerArea.className = "Nextinfo";
    }


    
    makeColomn(getDaysInMonth(year, currentMonths) + 1, currentMonths);

}



function GetPreviousMonth()
{
    currentMonths = currentMonths - 1;
    console.log(currentMonths);
   
    var now = new Date(year, currentMonths, 0);

    var nowStr = now.toDateString(); 
    
 
    
    var currentMonthss = nowStr.split(' '); 
    headerArea.innerText = currentMonthss[1] + " " + currentMonth[2] + " " + now.getFullYear(); 

    Clear();

    if(currentMonths >= month) 
    {
    
        headerArea.className = "info";
    }else 
    {
        headerArea.className = "Lastinfo";
    }

    makeColomn(getDaysInMonth(year, currentMonths) + 1, currentMonths);

}





setInterval(function() {
    var nowww = new Date();
    clockArea.innerText = nowww.getHours().toString() + ":" + nowww.getMinutes().toString() + ":" + nowww.getSeconds().toString();


}, 1000);



function ConvertArrayTohtmlWeek(arrayList = [])
{
            var u = document.createElement("u");
            var container = document.getElementById("container");
            for (let index = 0; index < arrayList.length; index++) 
            {
              var li = document.createElement("li");
              var div = document.createElement("div");
              div.className = "header";
              div.id = arrayList[index];
              div.innerText = arrayList[index];
              li.appendChild(div);
              u.appendChild(li);
            }  

            container.appendChild(u);
}


var list = ["Monday", "Theusday", "Wednesday", "Thursday", "Friday",  "Saturday", "Sunday"];

window.onload = function()
{
   
   
    ConvertArrayTohtmlWeek(list);
    mondayheader = document.getElementById("Monday");
    theuheader = document.getElementById("Theusday");
    wednheader = document.getElementById("Wednesday");
    thursheader = document.getElementById("Thursday");
    fridheader = document.getElementById("Friday");
    saturdheader = document.getElementById("Saturday");
    sunheader = document.getElementById("Sunday");

    makeColomn(getDaysInMonth(year, month) + 1, month);
}


