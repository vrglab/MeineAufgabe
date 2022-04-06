

  
  var now = new Date();

  var nowStr = now.toDateString(); 


  
  
  var currentMonth = nowStr.split(' '); 
  const headerArea = document.getElementById("Month");
  const container = document.getElementById("container");
  let rows = document.getElementsByClassName("gridRow");
  let cells = [];
  let hiddencells = [];
  
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
var body = document.getElementById("body");
var backTodateButtton = document.getElementById("BackTodateButton");

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

        

        var weekday = noww.toLocaleString("default", { weekday: "long" })

            cell.innerText = s.toString();

            console.log(currentMonth[2]);

            if(s==1)
            {
                switch (weekday) {
                    case "Monday":
                        
                        break;
                    case "Tuesday":
                        let cellempty = document.createElement("div");
                        cellempty.innerText = "h";
                        mondayheader.appendChild(cellempty).className = "cellHidden";
                        hiddencells.push(cellempty);

                        break;
                    case "Wednesday":

                    
                        let cellempty8 = document.createElement("div");
                        cellempty8.innerText = "h";
                        mondayheader.appendChild(cellempty8).className = "cellHidden";
                        hiddencells.push(cellempty8);
                        let cellempty2 = document.createElement("div");
                        cellempty2.innerText = "h";
                        theuheader.appendChild(cellempty2).className = "cellHidden";
                        hiddencells.push(cellempty2);
                        break;
                    case "Thursday":
                        let cellempty3 = document.createElement("div");
                        cellempty3.innerText = "h";
                        wednheader.appendChild(cellempty3).className = "cellHidden";
                        hiddencells.push(cellempty3);


                        let cellempty9 = document.createElement("div");
                        cellempty9.innerText = "h";
                        mondayheader.appendChild(cellempty9).className = "cellHidden";
                        hiddencells.push(cellempty9);
                        let cellempty10 = document.createElement("div");
                        cellempty10.innerText = "h";
                        theuheader.appendChild(cellempty10).className = "cellHidden";
                        hiddencells.push(cellempty10);


                       break;
                     case "Friday":
                        let cellempty7 = document.createElement("div");
                        cellempty7.innerText = "h";
                        mondayheader.appendChild(cellempty7).className = "cellHidden";
                        let cellempty6 = document.createElement("div");
                        cellempty6.innerText = "h";
                        theuheader.appendChild(cellempty6).className = "cellHidden";
                        let cellempty5 = document.createElement("div");
                        cellempty5.innerText = "h";
                        wednheader.appendChild(cellempty5).className = "cellHidden";
                        let cellempty4 = document.createElement("div");
                        cellempty4.innerText = "h";
                        thursheader.appendChild(cellempty4).className = "cellHidden";

                        hiddencells.push(cellempty7);
                        hiddencells.push(cellempty6);
                        hiddencells.push(cellempty5);
                        hiddencells.push(cellempty4);
                        
                        break;
                    case "Saturday":

                        let cellempty14 = document.createElement("div");
                        cellempty14.innerText = "h";
                        mondayheader.appendChild(cellempty14).className = "cellHidden";
                        let cellempty13 = document.createElement("div");
                        cellempty13.innerText = "h";
                        theuheader.appendChild(cellempty13).className = "cellHidden";
                        let cellempty12 = document.createElement("div");
                        cellempty12.innerText = "h";
                        wednheader.appendChild(cellempty12).className = "cellHidden";
                        let cellempty11 = document.createElement("div");
                        cellempty11.innerText = "h";
                        thursheader.appendChild(cellempty11).className = "cellHidden";
                        let cellempty15 = document.createElement("div");
                        cellempty15.innerText = "h";
                        fridheader.appendChild(cellempty15).className = "cellHidden";


                        hiddencells.push(cellempty15);
                        hiddencells.push(cellempty14);
                        hiddencells.push(cellempty13);
                        hiddencells.push(cellempty12);
                        hiddencells.push(cellempty11);
                        
                        break;
                    case "Sunday":
                        let cellempty21 = document.createElement("div");
                        cellempty21.innerText = "h";
                        saturdheader.appendChild(cellempty21).className = "cellHidden";
                        let cellempty20 = document.createElement("div");
                        cellempty20.innerText = "h";
                        mondayheader.appendChild(cellempty20).className = "cellHidden";
                        let cellempty19 = document.createElement("div");
                        cellempty19.innerText = "h";
                        theuheader.appendChild(cellempty19).className = "cellHidden";
                        let cellempty18 = document.createElement("div");
                        cellempty18.innerText = "h";
                        wednheader.appendChild(cellempty18).className = "cellHidden";
                        let cellempty17 = document.createElement("div");
                        cellempty17.innerText = "h";
                        fridheader.appendChild(cellempty17).className = "cellHidden";
                        let cellempty16 = document.createElement("div");
                        cellempty16.innerText = "h";
                        thursheader.appendChild(cellempty16).className = "cellHidden";


                        hiddencells.push(cellempty21);
                        hiddencells.push(cellempty20);
                        hiddencells.push(cellempty19);
                        hiddencells.push(cellempty18);
                        hiddencells.push(cellempty17);
                        hiddencells.push(cellempty16);
                       break;

                }
            }

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




var currentMonths = month;

function getCurentDate()
{
    currentMonths = month;
    var now = new Date(year, currentMonths, 0);

    var nowStr = now.toDateString(); 
    
    
    var currentMonthss = nowStr.split(' '); 
    headerArea.innerText = currentMonthss[1] + " " + currentMonth[2] + " " + now.getFullYear(); 
    Clear();
    makeColomn(getDaysInMonth(year, month) + 1, month);
  
}

function Clear()
{
        for (let index = 0; index < cells.length; index++) 
        {
            var node = cells[index];
            
            node.parentNode.removeChild(node);
        }
        cells.length = 0;


        for (let index = 0; index < hiddencells.length; index++) 
        {
            var node = hiddencells[index];
            
            node.parentNode.removeChild(node);
        }
        hiddencells.length = 0;
}

var goneToNext = false;
var goneToBefore = false;

function GetNextMonth()
{
    currentMonths = currentMonths + 1;
    console.log(currentMonths);
    goneToNext = true;
    var now = new Date(year, currentMonths, 0);

    var nowStr = now.toDateString(); 
    
    
    var currentMonthss = nowStr.split(' '); 
    headerArea.innerText = currentMonthss[1] + " " + currentMonth[2] + " " + now.getFullYear(); 

    Clear();
   
    if(goneToBefore == false)
    {
        if(currentMonths <= month) 
        {
            headerArea.className = "info";
        }else
        {
            headerArea.className = "Nextinfo";
        }
        BackTodateButton.className = "TopShowLeft";    
        body.className = "Next";
        for (let index = 0; index < cells.length; index++) {
            if(cells[index].innerText !=  currentMonth[2] )
            {
                cells[index].className = "cell"
            }
            
        }

        
    }


    
    makeColomn(getDaysInMonth(year, currentMonths) + 1, currentMonths);

}



function GetPreviousMonth()
{
    currentMonths = currentMonths - 1;
    console.log(currentMonths);
    goneToBefore = true;
    var now = new Date(year, currentMonths, 0);

    var nowStr = now.toDateString(); 
    
 
    
    var currentMonthss = nowStr.split(' '); 
    headerArea.innerText = currentMonthss[1] + " " + currentMonth[2] + " " + now.getFullYear(); 

    Clear();
    if(goneToNext == false)
    {
        if(currentMonths >= month) 
        {
        
            headerArea.className = "info";
        }else 
        {
            headerArea.className = "Lastinfo";
        }
        BackTodateButton.className = "TopShowRight";
        body.className = "Before";
        for (let index = 0; index < cells.length; index++) {
            if(cells[index].innerText !=  currentMonth[2] )
            {
                cells[index].className = "cell"
            }
            
        }
    }


    makeColomn(getDaysInMonth(year, currentMonths) + 1, currentMonths);

}





setInterval(function() {
    var nowww = new Date();
    clockArea.innerText = nowww.getHours().toString() + ":" + nowww.getMinutes().toString() + ":" + nowww.getSeconds().toString();


}, 1000);



setInterval(function() {


    if(currentMonths == month)
    {
        goneToNext = false;
        goneToBefore = false;
        headerArea.className = "info";
        body.className = "Norm";
        for (let index = 0; index < cells.length; index++) {
            if(cells[index].innerText ==  currentMonth[2] )
            {
                cells[index].className = "cell"
            }

          
            
            
        }        BackTodateButton.className = "TopHidden";  
        BackTodateButton.className = "TopHidden";
    }

}, 2);








window.onload = function()
{
   
   

    mondayheader = document.getElementById("Monday");
    theuheader = document.getElementById("Theusday");
    wednheader = document.getElementById("Wednesday");
    thursheader = document.getElementById("Thursday");
    fridheader = document.getElementById("Friday");
    saturdheader = document.getElementById("Saturday");
    sunheader = document.getElementById("Sunday");

    makeColomn(getDaysInMonth(year, month) + 1, month);
}


