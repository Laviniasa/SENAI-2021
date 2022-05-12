function seleciona(name, indice) {
    var imgs = document.querySelectorAll('img[name=' + name + ']');
   
    for (var i=0; i < imgs.length; i++) {
        if (i <= indice)
            imgs[i].className = "destaque";
        else
            imgs[i].className = "apagada";
    }
 }
 
 window.onload = function() {
    var imgs = document.querySelectorAll('img[name=fb]');
   
    for (var i=0; i < imgs.length; i++) {
        (function(name, i) {
           imgs[i].addEventListener('click', function () {
               seleciona(name, i);
           });
        })(imgs[i].name, i);
    }
 }