async function loadCapas() {
    //alert ('entrou');
    fetch("http://localhost:7000/livro")
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            let capa = document.querySelectorAll('#capa');
            data.forEach((item, index) => {
                //alert ('passou'+item+'index='+index);
                capa[index].src = item.capa;
                capa[index].id = item.id;
                capa[index].addEventListener("click", () => {
                   window.open("http://127.0.0.1:5501/livro/index.html?id=" + capa[index].id);
                });
                //capa[index].onclick = linkLivro(item.id);
                
            })
        })
        
}

async function linkLivro(id)
{
    document.location = "../dadoslivro/index.html?id="+id;
}

// async function loadDadosLivro(){
//     //construir funcao que exibe nome_livro, capa, capitulo e escrita 
// }

function init() {
    loadCapas();
    loadDadosLivro();
}

init();

function redireciona() {
    window.location.href = "../leia/index.html"
}

function red() {
    window.location.href = "../perfil/index.html"
}

function redirecionar() {
    window.location.href = "../escrever/index.html"
}

function navegar() {
    window.location.href = "https://www.instagram.com"
}

function navegarum() {
    window.location.href = "https://www.instagram.com"
}

function navegardois() {
    window.location.href = "https://www.instagram.com"
}

function navegartres() {
    window.location.href = "https://www.instagram.com"
}

function navegarquatro() {
    window.location.href = "https://www.instagram.com"
}

function handleLogoutClick() {
    localStorage.clear();
    AuthActions.logout().then(() => {
    window.location.reload();
});
}

function tras(e) {
    let livros = document.querySelector(".row__posters");

    livros.scrollLeft = 0;
}
function frente(e) {
    let livros = document.querySelector(".row__posters");

    let move = livros.scrollLeft + 300;

    if(move >= livros.scrollWidth) {
        livros.scrollLeft = livros.scrollWidth;
    }else {
        livros.scrollLeft = move;
    }
}