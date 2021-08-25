var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var result = 0;

function soma(){
    result = Number(n1.value) + Number(n2.value);
    document.getElementById('resultado').innerHTML = result;
}
function sub(){
    result = Number(n1.value) - Number(n2.value);
    document.getElementById('resultado').innerHTML = result;
}
function mult(){
    result = Number(n1.value) * Number(n2.value);
    document.getElementById('resultado').innerHTML = result;
}
function div(){
    result = Number(n1.value) / Number(n2.value);
    document.getElementById('resultado').innerHTML = result;
}
function porc(){
    result = Number(n1.value) % Number(n2.value);
    document.getElementById('resultado').innerHTML = result;

}