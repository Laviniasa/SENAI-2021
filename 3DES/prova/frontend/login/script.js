//var btnSignin = document.querySelector("#signin");
//var btnSignup = document.querySelector("#signup");

//var body = document.querySelector("body");


/*
btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js"; 
});
*/
/*
btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})
*/
//document.querySelector("#signin").onclick = ()=>cadastro();

function verificaLogin() {
  if(localStorage.getItem('userdata') != null) {
      window.location.href = '../home';
  }
}

async function cadastro() {
  let body = {
    nome: document.querySelector("#nome").value,
    email: document.querySelector("#email").value,
    senha: document.querySelector("#senha").value
  }

  let settings = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(body)
  }

  // let response = await fetch("http://localhost:7000/usuario", settings);
  // let json = await response.json();

  // console.log(json);
  fetch(
    "http://localhost:7000/usuario"
    , settings
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.id !== undefined) {
        localStorage.setItem("userdata", JSON.stringify(data));
        window.location.href = '../objeto';
      } else {
        alert(data.err);
      }
      // console.error(data);
      window.location.reload()
    });

}


// document.querySelector("#login").onclick = ()=>login();

function login() {
  // fetch("http://localhost:7000/usuario",)
  // .then(response=>{console.log(response)})
  // .then(resp=>{})

  let body = {
    email: document.querySelector("#email-login").value,
    senha: document.querySelector("#senha-login").value
  }

  let settings = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(body) //como passa body no metodo de acesso GET?
  }

  fetch(
    "http://localhost:7000/login"
    , settings
  )
    .then(response => {

      return response.json()
    })
    .then(data => {
      if(data.length > 0) {
        localStorage.setItem("userdata", JSON.stringify(data[0]));
        window.location.href = '../objeto';
    }else {
        alert(" Senha invalida");
    }

    });

}

// document.getElementById("login").innerHTML =
// "Page location is " + window.location.href;


function insert(num){
  document.form.textview.value = document.form.textview.value + num;
}
function equal(){
  exp = document.form.textview.value;
  if(exp){
     document.form.textview.value = eval(exp);
}
}
function c(){
  document.form.textview.value = "";
}
function back(){
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length-1);
}