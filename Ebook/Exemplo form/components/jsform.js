function valida() {
    document.formulario.busca.style.borderColor = "#ffffff";
    document.formulario.busca.style.backgroundColor = "#ffffff";
    if (document.formulario.busca.value < 3) {
        alert("Digite pelo menos 3 caracteres");
        document.formulario.busca.style.borderColor = "#ff4500";
        document.formulario.busca.style.backgroundColor = "#ffffe0";
        document.formulario.busca.focus();
        return false;
    }
    return true;
}

var entrou = 0;
var saiu = 0;

function Entrou() {
    entrou+=1;
    var texto = "Entrou = " + entrou + " vezes e, Saiu = " + saiu + " vezes";
    document.getElementById("info").innerHTML = texto;
    document.getElementById("div1").style.backgroundColor = "red";
}
function Saiu() {
    saiu+=1;
    var texto = "Entrou = " + entrou + " vezes e, Saiu = " + saiu + " vezes";
    document.getElementById("info").innerHTML = texto;
    document.getElementById("div1").style.backgroundColor = "blue";
}