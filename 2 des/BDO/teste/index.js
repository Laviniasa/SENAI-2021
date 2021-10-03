function imunizacao(){
    //Entradas
    var total_mes= document.getElementById("total_mes").value;
    var total_vacinas= document.getElementById("total_vacinas").value;

    //Calculo
    var primeira_dose = total_vacinas/total_mes;
    var segunda_dose = total_vacinas -primeira_dose;
    var pessoas_imunizadas = (primeira_dose + segunda_dose)/primeira_dose;
    var esperando_segundadose = (primeira_dose - segunda_dose);

    //saidas
    document.getElementById("pessoas_imunizadas").innerHTML = pessoas_imunizadas;
    document.getElementById("primeira_dose").innerHTML = primeira_dose;
    document.getElementById("segunda_dose").innerHTML = segunda_dose
    document.getElementById("esperando_segundadose").innerHTML = esperando_segundadose;
}