//function clicou(qual){
  //  console.log ("clicou em "+qual.id)
  //  let cardObjt = document.getElementById(qual.id)
  //  carta.setAttribute("style","background-image: url(./img/bolinha"+cardObjt.bt1+"');")

 //   var carta = ["bolinha.jpg, bolinha.jpg, bolinha.jpg, v bolinha.jpg, bolinha.jpg, bolinha.jpg, bolinha.jpg, bolinha.jpg, "]
//var cardObjt = {//




//for(var i=0;i<9;i++) {
  //  casas[i].addEventListener('click', (event) => {

var inicio=0;

function casa(e){
     if(inicio==0){
         e.style.backgroundImage="url('./img/X.jpg')";
         inicio++;
     }else if(inicio==1){
        e.style.backgroundImage="url('./img/bolinha.jpg')";
        inicio=0;
     }
}
function casasIguais(a, b, c){
    var casaA = $("#casa"+a);
    var casaB = $("#casa"+b);
    var casaC = $("#casa"+c);
    var bgA = $("#casa"+a).css("background-image");
    var bgB = $("#casa"+b).css("background-image");
    var bgC = $("#casa"+c).css("background-image");
    if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
        if(bgA.indexOf("1.png") >= 0)
            vencedor = "1";
        else
            vencedor = "2";
        return true;
    }
    else{
        return false;
    }
}


