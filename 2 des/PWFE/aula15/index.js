function add() {
    let corpo = document.querySelector(".corpo")
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = "<label>"+document.getElementById("compromisso").value+"</label>"
    let importante = document.createElement("button")
    importante.className = "importante"
    importante.addEventListener("click", () => {
        card.setAttribute("style","background-color:#fbb;border: 1px solid #600;");
    });
    let excluir = document.createElement("button")
    excluir.className = "excluir"
    excluir.addEventListener("click", () => {
        card.remove();
    });
    card.appendChild(importante)
    card.appendChild(excluir)
    corpo.appendChild(card)
}

    
    let url = "http://10.87207.2:8080/api/livros?id=141";

    let obj = {
        "id": 141,
        "titulo": "Biblia",
        "autor": "Jesus",
        "editora": "Os Apostolos",
        "idioma": "TODOS",
        "urlImagem": "https://m.media-amazon.com/images/I/618iHJVMh4L.jpg",
        "lancamento": "0000-00-00T03:00:00.000+00:00",
        "numeroPaginas": 950,
        "estoque": 10,
        "preco": 10.3
    }
    fetch(url)
    .then(res => { returnjson()})
    .then (data =>{
        console.log(data);
    })
    .catch(err => {console.log(err)});