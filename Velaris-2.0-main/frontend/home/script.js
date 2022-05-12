async function loadCapas() {
    //alert ('entrou');
    fetch("http://localhost:7000/livro/")
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            let capa = document.querySelectorAll('#capa');
            let nome_livro = document.querySelectorAll('nome_livro')
            data.forEach((item, index) => {
                //alert ('passou'+item+'index='+index);
                capa[index].src = item.capa;
                
            })
        })
        
}

async function loadDadosLivro(){
    //construir funcao que exibe nome_livro, capa, capitulo e escrita 
}

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