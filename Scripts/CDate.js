

  
  var now = new Date();

  var nowStr = now.toDateString(); 


  
  
  var currentMonth = nowStr.split(' '); 
  const headerArea = document.getElementById("Month");
  const container = document.getElementById("container");
  let rows = document.getElementsByClassName("gridRow");
  let cells = [];
  
  var month = now.getUTCMonth();
  var year = now.getUTCFullYear();

  headerArea.innerText = currentMonth[1] + " " + currentMonth[2] + " " + now.getFullYear(); 
  var clockArea = document.getElementById("Clock");
  //clockArea.className = "clock";
  //headerArea.appendChild(clockArea); 


var mondayheader = document.getElementById("Monday");
var theuheader = document.getElementById("Teusday");
var wednheader = document.getElementById("Wednesday");
var thursheader = document.getElementById("Thursday");
var fridheader = document.getElementById("Friday");
var saturdheader = document.getElementById("Saturday");
var sunheader = document.getElementById("Sunday");


var getDaysInMonth = function(years, months) {
   daysInMonth = new Date(years, months , 0).getDate();
   return daysInMonth;
  
  };









var firstofMonthison = "Monday";
function makeColomn(colmNum, months, list = [])
{
    var daysInMonth = new Date(year, months , 1);
  


    switch(daysInMonth.getDay())
    {
        case 1:
            console.log("start")
        break;


        case 2:
            console.log("start")
            firstofMonthison = "tuesday";
        break;


        case 3:
            console.log("start")
            firstofMonthison = "wednesday";
         break;


        case 4:
            console.log("start")
            firstofMonthison = "thursday";
        break;


        case 5:
            console.log("start")
            firstofMonthison = "friday";
        break;


        case 6:
            console.log("start")
            firstofMonthison = "saturday";
        break;


        case 7:
            console.log("start")
            firstofMonthison = "sunday";
        break;
    }


  

    var firstset = false;
   for (let indexx = 0; indexx < list.length; indexx++) {
      
    for (let index = 0; index < 5; index++) {
        var div = document.createElement("div")
        div.className = "cell";
        cells.push(div);

     


       switch(firstofMonthison)  
            {
                case "monday":
                    if(list[indexx].id == "Monday")
                    {
                        if(!firstset)
                        {


                            div.innerText = "1";
                            if(cells[0] != div)
                            {
                                cells[0].innerText = "h";
                            }

                            firstset = true;
                        }
                    }
                    break;


                case "tuesday":
                    if(list[indexx].id == "Teusday")
                    {
                        if(!firstset)
                        {


                            div.innerText = "1";
                            if(cells[0] != div)
                            {
                                cells[0].innerText = "h";

                            }

                            firstset = true;
                        }
                      
                        
                    }
        
                break;


                case "wednesday":
                    if(list[indexx].id == "Wednesday")
                    {
                        if(!firstset)
                        {


                            div.innerText = "1";
                            if(cells[0] != div)
                            {
                                cells[0].innerText = "h";
                                    cells[5].innerText = "h";

                            }

                            firstset = true;
                        }
                    }
                    break;

                case "thursday":
                    if(list[indexx].id == "Teusday")
                    {
                        if(!firstset)
                        {


                            div.innerText = "1";
                            if(cells[0] != div)
                            {
                                cells[0].innerText = "h";
                                    cells[5].innerText = "h";
                                    cells[10].innerText = "h";
                                   
                            }

                            firstset = true;
                        }
                    }
                     break;


                case "friday":
                        if(list[indexx].id == "Friday")
                        {
                            if(!firstset)
                            {
    
    
                                div.innerText = "1";
                                if(cells[0] != div)
                                {
                                    cells[0].innerText = "h";
                                    cells[5].innerText = "h";
                                    cells[10].innerText = "h";
                                    cells[15].innerText = "h";

                                   
                                }
    
                                firstset = true;
                            }
                        }
                break;
            }


            
        

            list[indexx].appendChild(div);

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
    
    if(currentMonths <= noww.getUTCMonth() + 1) 
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
    
    var noww = new Date();
    
    var currentMonthss = nowStr.split(' '); 
    headerArea.innerText = currentMonthss[1] + " " + currentMonth[2] + " " + now.getFullYear(); 

    Clear();

    if(currentMonths >= noww.getUTCMonth() + 1) 
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


var list = ["Monday", "Teusday", "Wednesday", "Thursday", "Friday",  "Saturday", "Sunday"];
var list2 = [];


window.onload = function()
{
   
   
    ConvertArrayTohtmlWeek(list);
    mondayheader = document.getElementById("Monday");
    theuheader = document.getElementById("Teusday");
    wednheader = document.getElementById("Wednesday");
    thursheader = document.getElementById("Thursday");
    fridheader = document.getElementById("Friday");
    saturdheader = document.getElementById("Saturday");
    sunheader = document.getElementById("Sunday");

    list2.push(mondayheader);
    list2.push(theuheader);
    list2.push(wednheader);
    list2.push(thursheader);
    list2.push(fridheader);
    list2.push(saturdheader);
    list2.push(sunheader);

    makeColomn(getDaysInMonth(year, month), month, list2);
}


