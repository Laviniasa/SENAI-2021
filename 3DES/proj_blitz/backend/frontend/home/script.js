const alerta = document.querySelector("#alerta");
const cadastrar = document.querySelector("#cadastrar");
const body = document.querySelector("body");

var map;
var meuAlerta;

body.addEventListener("load", () => {
    
});

function initMap() {
    map = new google.maps.Map(document.querySelector(".map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 18,
    });

    map.addListener("click", (data) => {
        let coord = { lat: data.latLng.lat(), lng: data.latLng.lng() };

        //addMarker(coord, "Teste", "../assets/radarzin.png");
        meuAlerta = coord;

        alerta.hidden = false;
        cadastrar.hidden = false;
    });

    navigator.geolocation.getCurrentPosition((location) => {
        let coord = { lat: location.coords.latitude, lng: location.coords.longitude};
        
        map.setCenter(coord);

        addMarker(coord, "Minha Localizacao", "../assets/radar.png");
    });
}

function cadastro() {
    let data = JSON.stringify({
      "id_user": 1,
      "id_alerta": alerta.value,
      "coordenadas": maeuAlerta.lat + "," +meuAlerta.lang,
      "ativo": true,
    });
    fetch("http://localhost:3000/localizacao", {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: data
    })

    .then(resp =>{return resp.json()})
    .then(data =>{
      if(data.id != undefined){
        let tipo = alerta.value;
        addMarker(meuAlerta, tipo, "../assets/radar.png");
        alerta.hidden = true;
        cadastrar.hidden = true;
      }else{
        alert("não foi possivel informar o alerta");
      }
    })
}
function addMarker(coord, title, image) {
    new google.maps.Marker({
        position: coord,
        map: map,
        title: title,
        icon: image
    });
}

function inicializar() {
  carregarMarcaçoes();
  carregarMarcaçoes();
}

function carregarMarcaçoes(){
    fetch("http://localhost:3000/localizacao")
    .then(resp => { return resp.json() })
    .then(data => {
      data.forEach(localizacao => {
          
        let coordenadas = localizacao.split(",");
        let coord = {lat: Number(coordenadas[0]), lng: Number(coordenadas[1])};

        addMarker(coord, localizacao.alertum.tipo, "../assets/radar.png");
      });
    })
}


function carregarAlertas() {
    fetch("http://localhost:3000/alerta")
    .then(resp => { return resp.json() })
    .then(data => {
        data.forEach(alert => {
            let op = document.createElement("option");
            op.value = alert.id;
            op.innerHTML = alert.tipo;
            alerta.appendChild(op);
        })
    })
}