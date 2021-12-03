const reformJson = (item, matricula) => {
    item.matricula = matricula;
    return item;
}

const calcIRRF = (json) =>{
    if(json.ultimo_salario<=1980.90){
        json.aliquota = 0;
    }else if(json.ultimo_salario > 1980.90 && json. ultimo_salario <= 2940.85){
        json.aliquota = 7.50;
    }else if(json.ultimo_salario > 2940.85 && json. ultimo_salario <= 3902.59){
        json.aliquota = 15;
    }else if(json.ultimo_salario > 3902.59 && json. ultimo_salario <= 4853.13){
        json.aliquota = 22.50;
    }else{
        json.aliquota =27.50;
    }
    json.valor_taxa = ((json.ultimo_salario*json.aliquota)/100).toFixed(2)
    return json;
}

module.exports = {
    reformJson,
    calcIRRF
}