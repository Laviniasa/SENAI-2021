const camera = document.querySelector('#camera');
const imgCapa = document.querySelector('#imgCapa');
const titulo = document.querySelector('#titulo');
const capa = document.querySelector('#capa');

var livroUpload = {}

document.querySelector("#public").addEventListener("click", () => {
    livroUpload.nome_livro = document.getElementById("nome-livro").value
    livroUpload.capitulo = document.getElementById("captulo-nome").value
    livroUpload.escritor = (JSON.parse(localStorage.getItem("userdata"))).nome
    livroUpload.genero = document.getElementById("genero").value
    livroUpload.escrita = document.getElementById("texto-captulo").value
    
    async function postLivro() {
        let item = await fetch("http://10.87.207.3:7000/livro", {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(livroUpload)
        })
        let resp = await item.json();
        return resp;
    }
    postLivro().then(data => {
        if (data.id != undefined) {
            window.location.href = "../home/index.html"
        }
    })
})

document.querySelector("#capitulos").addEventListener("change", (e)=>{
    if(document.querySelector("#capitulos").value<=0){
        document.querySelector("#capitulos").value=1
    }else{
        document.querySelector("#caps").querySelectorAll('option').forEach(e=>{
            if(!e.disabled == true){
                e.remove();
            }
        })
       for(let a=1; a<(parseInt(document.querySelector("#capitulos").value)+1);a++){
            let model = document.createElement("option")
            model.value=a
            model.innerHTML=`${a} - `
            livro.push({
                capitulo: a,
                nome_capitulo: "",
                texto: ""
            })
            document.querySelector("#caps").appendChild(model)
       }
       livro[0].nome = document.querySelector("#nome-livro").value
       livro[0].capitulos = document.querySelector("#capitulos").value
    }
})

document.querySelector("#caps").addEventListener("change", ()=>{
    if(livro[parseInt(document.querySelector("#caps").value)].nome_capitulo!=""){
    }
    document.querySelector("#captulo-nome").value = livro[parseInt(document.querySelector("#caps").value)].nome_capitulo
    document.querySelector("#texto-captulo").value = livro[parseInt(document.querySelector("#caps").value)].texto
    document.querySelector("#captulo-nome").onchange = () => {
        livro[parseInt(document.querySelector("#caps").value)].nome_capitulo = document.querySelector("#captulo-nome").value
        document.querySelector("#caps").querySelectorAll('option').forEach(e=>{
            if(e.value == document.querySelector("#caps").value){
                console.log(e.innerHTML)
                e.innerHTML = `${livro[parseInt(document.querySelector("#caps").value)].capitulo} - ${livro[parseInt(document.querySelector("#caps").value)].nome_capitulo}`
            }
        })
    }
    document.querySelector("#texto-captulo").onchange = () => {
        livro[parseInt(document.querySelector("#caps").value)].texto = document.querySelector("#texto-captulo").value
    }
})

function handleClickUpload() {
    document.getElementById("book-image").click()
}

document.getElementById("book-image").addEventListener("change", (e) => {
    let file = e.target.files[0];

    let reader = new FileReader();

    reader.onload = (data) => {
        imagem = data.target.result;
        livroUpload.capa = imagem
        document.querySelector(".capaLivro").src = imagem;
    }

    reader.readAsDataURL(file);
    document.querySelector(".capaLivro").style.visibility = "visible"
});

camera.addEventListener('click', () => {
    capa.click();
});

capa.addEventListener('change', (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = (data) => {
        imagem = data.target.result;
        imgCapa.src = imagem;
    }
    reader.readAsDataURL(file);
});

function handleLogoutClick() {
    localStorage.clear();
    AuthActions.logout().then(() => {
        window.location.reload();
    });
}

function trocarcor(id) {
    document.getElementsByTagName("body")[0].style.background = id;
}