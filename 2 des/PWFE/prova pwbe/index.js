function send()
{    let button = document.createElement("button");
    document.getElementById('nome_pedido').value =  document.getElementById('nome').value;
    document.getElementById('endereço_pedido').value =  document.getElementById('endereço').value;
    document.getElementById('pedido_pedido').value =  document.getElementById('pedido').value;

    document.getElementById('nome').value = "";
    document.getElementById('endereço').value = "";
    document.getElementById('pedido').value =  "";

}

function sendtarefa()
                {
                    document.getElementById('nome_entrega').value =  document.getElementById('nome_pedido').value;
                    document.getElementById('endereço_entrega').value =  document.getElementById('endereço_pedido').value;
                    document.getElementById('pedido_entrega').value =  document.getElementById('pedido_pedido').value;
                    
                    document.getElementById('nome_pedido').value = "";
                    document.getElementById('endereço_pedido').value = "";
                    document.getElementById('pedido_pedido').value =  "";
              
                }

                 //cria um button para executar a acao de exclusao
            let button = document.createElement("button");
            
            });