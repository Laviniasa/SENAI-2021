const modal = document.querySelector(".modal");

var paramsBusca = new URLSearchParams(location.search);

async function loadCards() {
    fetch("http://10.87.207.3:7000/livro/"+paramsBusca.get("id"))
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data)
            // alert(resp.json());
            let card = document.querySelectorAll('.card');
            let nome_livro = document.querySelectorAll('nome_livro')
            data.forEach((item, index) => {
                document.getElementById("card_img").src = item.capa;
                nome_livro[index] = item.nome_livro;
                let titulo = document.querySelector(".quadrado2").querySelectorAll("h2")
                let genero = document.querySelector(".quadrado2").querySelectorAll("h4")
                titulo[0].innerHTML = item.titulo
                titulo[1].innerHTML = item.genero
                genero[0].innerHTML = item.sinopse
            })
        })
}

function generateCards(data) {

    localStorage.setItem('ex1', JSON.stringify);
    imgCard = JSON.parse(localStorage.getItem('userdata'));

    livro.innerHTML = userdata;
}

function init() {
    loadCards();
}

(init) ();

function showModal() {
    showModal();
    
}

// function load() {
//     carregarDados();
// }

// function carregarDados() {

// }
// function initMap() {    
    // map = new google.maps.Map(document.querySelector(".map"), {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 18,
    // });

    // map.addListener("click", (data) => {
    //     let coord = { lat: data.latLng.lat(), lng: data.latLng.lng() };

        // //addMarker(coord, "Teste", "../assets/radar.png");
        // meuAlerta = coord;
        
    //     showModal();
    // });

//     navigator.geolocation.getCurrentPosition((location) => {
//         let coord = { lat: location.coords.latitude, lng: location.coords.longitude};
        
//         map.setCenter(coord);

//         addMarker(coord, "Minha Localizacao", "../assets/localiza.png");
//     });
// }

function showModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}