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