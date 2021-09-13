var body = document.querySelector("body");
function loadData(e) {
    let file = e.files[0];

    let fr = new FileReader();

    fr.onload = () => {
        let data = JSON.parse (fr.result);
       
        generateHTML(data);
    };

    fr.readAsText(file);
}
function generateHTML(data){

    function soma(){
        for(var soma=0,  count=1 ; count<=1000 ; count++)
         soma += count;
       
        document.writeln("Soma:"+soma);
      }
}
