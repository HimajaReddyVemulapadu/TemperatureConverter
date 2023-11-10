console.log("Hello WOrld!");
var x = document.getElementById("dropdowninput1");
var x1= document.getElementById("dropdowninput");
let z= document.getElementById("result");

function celsius1(){
    var y = document.getElementById("celsius1").innerHTML;
    x.innerHTML= y;
    
}


function fahrenheit1(){
    var y = document.getElementById("fahrenheit1").innerHTML;
    x.innerHTML= y;
   
 
}
function kelvin1(){
    var y = document.getElementById("kelvin1").innerHTML;
    x.innerHTML= y;
   
     
}
function rankine1(){
    var y = document.getElementById("rankine1").innerHTML;
    x.innerHTML= y;
   
     
}
function celsius(){
    var y = document.getElementById("celsius").innerHTML;
    x1.innerHTML= y;
  

  
}
function fahrenheit(){
    var y = document.getElementById("fahrenheit").innerHTML;
    x1.innerHTML= y;
    
   
}
function kelvin(){
    var y = document.getElementById("kelvin").innerHTML;
    x1.innerHTML= y;
   
  
}
function rankine(){
    var y = document.getElementById("rankine").innerHTML;
    x1.innerHTML= y;
    
  
}
function getValue(val){
console.log(val);
if (x.innerHTML=="Celsius" & x1.innerHTML== "Fahrenheit"){
  z.value= (1.8* val) + 32;
  val=0; 
}
else if (x.innerHTML=="Celsius" & x1.innerHTML== "Kelvin"){
    z.value= (val/1) + 273;
    val=0;  
  }
  else if (x.innerHTML=="Celsius" & x1.innerHTML== "Rankine"){
    z.value= (1.8* val) + 492;
    val=0;  
  }
  else if (x.innerHTML=="Fahrenheit" & x1.innerHTML== "Celsius"){
    z.value=( val - 32) / 1.8; 
    val=0; 
  }
  else if (x.innerHTML=="Fahrenheit" & x1.innerHTML== "Kelvin"){
    z.value=( (val/1) + 459.4) / (1.8);
    val=0;  
  }
  else if (x.innerHTML=="Fahrenheit" & x1.innerHTML== "Rankine"){
    z.value=( (val/1) + 460); 
    val=0; 
  }
  else if (x.innerHTML=="Kelvin" & x1.innerHTML== "Celsius"){
    z.value=( val -273); 
    val=0; 
  }
  else if (x.innerHTML=="Kelvin" & x1.innerHTML== "Fahrenheit"){
    z.value=( val * 1.8) - 459.4; 
    val=0; 
  }
  else if (x.innerHTML=="Kelvin" & x1.innerHTML== "Rankine"){
    z.value=( val * 1.8) + 0.6; 
  }
  else if (x.innerHTML=="Rankine" & x1.innerHTML== "Celsius"){
    z.value=( val - 492) / 1.8; 
    val=0; 
  }
  else if (x.innerHTML=="Rankine" & x1.innerHTML== "Fahrenheit"){
    z.value=( val - 460 ); 
    val=0; 
  }
  else if (x.innerHTML=="Rankine" & x1.innerHTML== "Kelvin"){
    z.value=( val - 0.6) / 1.8; 
    val=0; 
  }
  else{
    alert("First select to which temperature you want to convert and then enter the value!!!")
  }



}


