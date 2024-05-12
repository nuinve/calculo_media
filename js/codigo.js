function verificar_nota(){
    let nota1 = parseFloat(document.getElementById("nota1").value); 
    let nota2 = parseFloat(document.getElementById("nota2").value); 
    let nota3 = parseFloat(document.getElementById("nota3").value); 
    let text = "";
    let div = document.getElementById("resposta");
    var media = (nota1 + nota2 + nota3) /3;


    if(media >= 6){        
        text = "Situação: Aprovado(a), media: " + media.toFixed(2);
    } else{
        text = "Situação: Reprovado(a), media: " + media.toFixed(2);
    }
    div.innerHTML = text;
        

}