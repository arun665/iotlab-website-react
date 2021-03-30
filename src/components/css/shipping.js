
 var x=document.getElementsByClassName("next");
 
 document.getElementById("next").addEventListener("click", function(){

document.getElementById("secondpart").className="active";

document.getElementById("table1").style.display="none";
document.getElementById("table2").style.display="block";

 });

 document.getElementById("prev").addEventListener("click", function(){

document.getElementById("secondpart").className="";

document.getElementById("table1").style.display="block";
document.getElementById("table2").style.display="none";

 });