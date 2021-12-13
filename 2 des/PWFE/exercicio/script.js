let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    adcionarNaLista();
});

function adcionarNaLista() {
    let div = document.createElement("div");
    div.setAttribute("class", "card")

    let texto = document.createElement("p"); //criar tags
    let botao_importante = document.createElement("button");
    botao_importante.addEventListener("click", () => {
        if(div.style.backgroundColor == "lightcoral") {
            div.style.backgroundColor = "white";
        } else {
            div.style.backgroundColor = "lightcoral";
        }
    });

    let botao_exluir = document.createElement("button");
    botao_exluir.addEventListener("click", () => {
        div.remove();
    })

    let input = document.getElementById("input").value;    
    

    botao_importante.innerHTML = "Impotante"
    texto.innerHTML = input;
    botao_exluir.innerHTML = "Excluir"

    div.appendChild(texto);
    div.appendChild(botao_importante);
    div.appendChild(botao_exluir);


    let body = document.querySelector("body");
    body.appendChild(div);
}