/*=================================*/ /*ZEGAR*/ /*=================================*/

function zegar()
{

var dzisiaj = new Date();

var dzien=dzisiaj.getDate();
var miesiac=dzisiaj.getMonth()+1;
var rok=dzisiaj.getFullYear();

var godzina = dzisiaj.getHours();
    if(godzina<10) godzina="0"+godzina;
    var minuta = dzisiaj.getMinutes();
    if(minuta<10) minuta="0"+minuta;
    var sekunda = dzisiaj.getSeconds();
    if(sekunda<10) sekunda="0"+sekunda;

    document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda;

    setTimeout("zegar()",1000);

}

/*=================================*/ /*BMI*/ /*=================================*/

function calcBMI() 
{
  var waga = document.bmiform.kg.value;
  var wzrost = document.bmiform.cm.value;
  document.bmiform.bmi.value = parseInt((waga * 10000) / (wzrost * wzrost));
} 

function login(){

var panel = document.getElementById("#logowanie");
panel = location.href = "login.html";

}

/*=================================*/ /*SEARCH*/ /*=================================*/

function search() 
{
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("Zdjecie");
      
    for( i = 0; i < x.length; i++ )
		{ 
          if( !x[i].innerHTML.toLowerCase().includes( input ) ) x[i].style.display="none";
          else x[i].style.display="list-item";                 
		}
}

/*=================================*/ /*SILOWNIA*/ /*=================================*/

function Okno1() 
{ 
 window.open('zdj1.html','_blank', 'menubar=no', 'width=100%', 'resizable=no'); 
} 

function Okno2() 
{ 
 window.open('zdj2.html','_blank', 'menubar=no', 'width=100%', 'resizable=no'); 
} 

function Okno3() 
{ 
 window.open('zdj3.html','_blank', 'menubar=no', 'width=100%', 'resizable=no'); 
} 

function Okno4() 
{ 
 window.open('zdj4.html','_blank', 'menubar=no', 'width=100%', 'resizable=no'); 
} 

function Okno5() 
{ 
 window.open('zdj5.html','_blank', 'menubar=no', 'width=100%', 'resizable=no'); 
} 

function Okno6() 
{ 
 window.open('zdj6.html','_blank', 'menubar=no', 'width=100%', 'resizable=no'); 
} 

function Okno7() 
{ 
 window.open('zdj7.html','_blank', 'menubar=no', 'width=100%', 'resizable=no'); 
} 

function Okno8() 
{ 
 window.open('zdj8.html','_blank', 'menubar=no', 'width=100%', 'resizable=no'); 
} 

function Okno9() 
{ 
 window.open('zdj9.html','_blank', 'menubar=no', 'width=100%', 'resizable=no'); 
} 

function Okno10() 
{ 
 window.open('zdj10.html','_blank', 'menubar=no', 'width=100%', 'resizable=no'); 
} 

function website(){

  location.href="index_plan.html";

}
function send_2(){

  location.href="index.html";

}
var numer=Math.floor(Math.random()*5)+1; //definiujemy globalnie, a nie odświeża się co 5 sekund, bo moglibyśmy mieć ten sam slajd przełączony na ten sam

var timer1=0;
var timer2=0;

function ustaw(nr){

clearTimeout(timer1);
clearTimeout(timer2);
numer=nr-1;

schowaj();
setTimeout("zmien()",500);

}

function schowaj(){
    $("#kontener").fadeOut(500);
    $("#kontener_2").fadeOut(500);
}
function zmien(){

numer++;
if(numer>3) numer=1; //jeśli przejdzie przez 3 to od 1
var plik="<img src=\"img/img6/before"+numer+".jpg\">";
var plik_2="<img src=\"img/img6/after"+numer+".jpg\">";
document.getElementById("kontener").innerHTML=plik;
document.getElementById("kontener_2").innerHTML=plik_2;
$("#kontener").fadeIn(500);
$("#kontener_2").fadeIn(500);

   timer1 = setTimeout("zmien()", 5000);
    timer2 = setTimeout("schowaj()", 4500);
}
function calcBMI() 
{
  var waga = document.bmiform.kg.value;
  var wzrost = document.bmiform.cm.value;
  document.bmiform.bmi.value = parseInt((waga * 10000) / (wzrost * wzrost));
  var BMI = parseInt((waga*10000)/(wzrost*wzrost));
  
  if(BMI < 16)
    {
        document.getElementById("bmiwyn").innerText = "Wygłodzenie";    
    }
	else if((BMI >= 16) && (BMI <= 16.9))
	{
        document.getElementById("bmiwyn").innerText = "Wychudzenie";
    }
	else if((BMI >= 17) && (BMI <= 18.49 ))
	{
        document.getElementById("bmiwyn").innerText = "Niedowaga";
    }
	else if((BMI >= 18.5) && (BMI <= 24.9 ))
	{
        document.getElementById("bmiwyn").innerText = "Waga prawidłowa";
    }
	else if((BMI >= 25) && (BMI <= 29.9))
	{
        document.getElementById("bmiwyn").innerText = "Nadwaga";
    }
	else if((BMI >= 30) && (BMI <= 34.9))
	{
        document.getElementById("bmiwyn").innerText = "Otyłość I stopnia";
    }
	else if((BMI >= 35) && (BMI <= 39.9))
	{
        document.getElementById("bmiwyn").innerText = "Otyłość II stopnia";
    }
	else 
	{
        document.getElementById("bmiwyn").innerText = "Otyłość III stopnia";
    }
}
function redict(){

    location.href="index_platnosc.html";

}