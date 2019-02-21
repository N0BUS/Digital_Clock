//Variáveis
var hours, min , sec, day, month;

day = new Array("Domingo", "Segnda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
month = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

var clock = function() {

    var date = new Date();

    hours = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours();
    min = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
    sec = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();                     
    
    var time = hours + ":" + min + ":" + sec;
    var fullDate = day[date.getDay()] + ", " + date.getDate() + " de " + month[ date.getMonth() ] + " de " + date.getFullYear();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = fullDate;

    clock();
}

setInterval( function()
{
    clock();

}, 1000);