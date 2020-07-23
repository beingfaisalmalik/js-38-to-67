
function Function1(a,b) {
  document.getElementById("demo2").innerHTML = " ";
  document.getElementById("demo3").innerHTML = " ";  
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  
document.getElementById("demo5").innerHTML =" ";
document.getElementById("demo8").innerHTML = " ";
document.getElementById("demo9").innerHTML = " ";
 document.getElementById("demo10").innerHTML = " ";
var a = window.prompt("PLEASE ENTER A NUMBER");
var b= window.prompt("PLEASE ENTER A POWER TO RAISE")

if (a==1)
{
  document.getElementById("demo1").innerHTML = a;  
}
else{
  var  i,p=1;
  for(i=1;i<=b;i++)
        p*=a;
        document.getElementById("demo1").innerHTML = p;  
}

    
}
function Function2(){
  document.getElementById("demo1").innerHTML = " ";  
  document.getElementById("demo3").innerHTML = " "; 
  document.getElementById("demo4").innerHTML = ""; 
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  
document.getElementById("demo5").innerHTML =" ";
document.getElementById("demo8").innerHTML = " ";
document.getElementById("demo9").innerHTML = " ";
 document.getElementById("demo10").innerHTML = " ";
  var year= window.prompt("PLEASE ENTER THE YEAR"); 
  if ((year % 100 === 0) && (year % 400 === 0)||(year % 4 === 0)) {
    document.getElementById("demo2").innerHTML  ="ITS A LEAP YEAR"
  }      
  else{
    document.getElementById("demo2").innerHTML  ="ITS  NOT A LEAP YEAR"
  }
      
}
function Function3(a,b,c){
document.getElementById("demo1").innerHTML = " ";  
document.getElementById("demo2").innerHTML = " ";  
document.getElementById("demo4").innerHTML = " ";
document.getElementById("demo5").innerHTML =" ";
document.getElementById("demo6").innerHTML = " ";
document.getElementById("demo7").innerHTML = " ";
document.getElementById("demo8").innerHTML = " ";
document.getElementById("demo9").innerHTML = " ";
 document.getElementById("demo10").innerHTML = " ";
var a = window.prompt("PLEASE ENTER THE LENGTH OF SIDE A");
var b= window.prompt("PLEASE ENTER THE LENGTH OF SIDE B")
var c= window.prompt("PLEASE ENTER THE LENGTH OF SIDE C")
var w = 2
var a1= parseInt(a)
var b1= parseInt(b)
var c1= parseInt(c)
var tot = a1+b1+c1
var s = tot/2

function Function3a()
{
  
  var area = s*(s-a)*(s-b)*(s-c)
  document.getElementById("demo2").innerHTML  =area
}
Function3a()
}
function Function4(mark1,mark2,mark3){
  document.getElementById("demo1").innerHTML = " ";  
  document.getElementById("demo2").innerHTML = " "; 
  document.getElementById("demo3").innerHTML = " "; 
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
   document.getElementById("demo10").innerHTML = " ";
var mark1 = window.prompt("PLEASE ENTER THE MARK'S OF SUBJECT 1");
var mark2= window.prompt("PLEASE ENTER THE MARK'S OF SUBJECT 2")
var mark3= window.prompt("PLEASE ENTER THE MARK'S OF SUBJECT 3")
var tottalmarks = window.prompt("PLEASE ENTER THE TOTAL MARK'S")
var w = 3
var a1= parseInt(mark1)
var b1= parseInt(mark2)
var c1= parseInt(mark3)
var TOT1= parseInt(tottalmarks)
var s;
var pe;

function average() {
  
var tot = a1+b1+c1
var s = tot/3

document.getElementById("demo4").innerHTML = "the average is:"+" "+Math.round(s);
}
function percentage() {
  
  var tot = a1+b1+c1
  var per = tot/TOT1
  var pe = (per)*100
  document.getElementById("demo5").innerHTML ="the percentage is:"+ Math.round(pe)+"%";

  }
  average()
  percentage()
}
function Function5(){
  document.getElementById("demo1").innerHTML = " ";  
  document.getElementById("demo2").innerHTML = " "; 
  document.getElementById("demo3").innerHTML = " "; 
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
   document.getElementById("demo10").innerHTML = " ";
  function indexOf(string, character) {
    let i=0;
    while(i < string.length){
        if(string[i] == character){  
            return i
        }
        i++                         
    }
    return -1;                    
}

document.getElementById("demo6").innerHTML = (indexOf("FAISAL MALIK ", "M"))+"<br>"+(indexOf("FAISAL MALIK ", "F"));
}

function Function6(){
  document.getElementById("demo1").innerHTML = " ";  
  document.getElementById("demo2").innerHTML = " "; 
  document.getElementById("demo3").innerHTML = " "; 
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
   document.getElementById("demo10").innerHTML = " ";
var string = window.prompt("Please enter a word of strings not more than 25")


string = string.replace( /[aeiou]/g, '' );

document.getElementById("demo7").innerHTML = string

}

function Function7(){
  document.getElementById("demo1").innerHTML = " ";  
  document.getElementById("demo2").innerHTML = " "; 
  document.getElementById("demo3").innerHTML = " "; 
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo9").innerHTML = " ";
   document.getElementById("demo10").innerHTML = " ";
var a = window.prompt("PLEASE ENTER THE DISTANCE IN KM:")

b = parseInt(a) * 1000;
c = parseInt(b) * 3.28;
d = parseInt(c) * 12;
f = parseInt(d) * 30;
document.getElementById("demo8").innerHTML = "THE DISTANCE IN METERES"+" "+b+"<br>"+"THE DISTANCE IN FEETS"+" "+c+"<br>"+"THE DISTANCE IN INCHES"+" "+d+"<br>"+"THE DISTANCE IN CENTIMETERS"+" "+f;
}
function Function8(){
  document.getElementById("demo1").innerHTML = " ";  
  document.getElementById("demo2").innerHTML = " "; 
  document.getElementById("demo3").innerHTML = " "; 
  document.getElementById("demo4").innerHTML = " ";
  document.getElementById("demo5").innerHTML = " ";
  document.getElementById("demo6").innerHTML = " ";
  document.getElementById("demo7").innerHTML = " ";
  document.getElementById("demo8").innerHTML = " ";
   document.getElementById("demo10").innerHTML = " ";

  	var i, time_worked,  over_time, overtime_pay = 0;
    var e=window.prompt("Please eter the number of employes")
     var emp = parseInt(e)
	for (i = 1; i <= emp; i++)
	{
		var t=window.prompt("Please enter the hours employee worked")
     time_worked = parseInt(t)
		
		if (time_worked>40)
		{
			over_time = time_worked - 40;
			overtime_pay = overtime_pay + (12 * over_time);
		}
	}
	document.getElementById("demo9").innerHTML =("Total Overtime Pay Of 10 Employees Is:", overtime_pay);

}
  function Function9(){
    document.getElementById("demo1").innerHTML = " ";  
    document.getElementById("demo2").innerHTML = " "; 
    document.getElementById("demo3").innerHTML = " "; 
    document.getElementById("demo4").innerHTML = " ";
    document.getElementById("demo5").innerHTML = " ";
    document.getElementById("demo6").innerHTML = " ";
    document.getElementById("demo7").innerHTML = " ";
    document.getElementById("demo8").innerHTML = " ";
    document.getElementById("demo9").innerHTML = " ";

    
  
  
}
