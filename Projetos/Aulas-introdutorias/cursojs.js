// var resposta = confirm("Deseja excluir?");
// let = quando tenho um "if"
// const = quando minha variavel é uma constante
// Evento é algo impotante no JS " Crie uma escuta para esse evento"

const a = 10;
const b = 33;

function somar(a,b){
    return a + b;
}

// crie uma escuta nesse cara "#"->seleciona no doc html 
document.querySelector("#btnCalcular").addEventListener("click", function () {
    let valorA = document.querySelector("#txtA").value;
    let valorB = document.querySelector("#txtA").value;

    alert(parseInt(valorA) + parseInt(valorB));


} );