function adicionarTarefa(){
    let texto = document.getElementById("texto")
    if(validarTexto(texto.value)){
        let dia = document.getElementById(document.getElementById("dia").value)
        dia.innerHTML += `<p onclick="riscarTarefa(this)">${texto.value}</p>`
        texto.value = ""
    }else{
        alert('Digite algo!')
    }
}

// Desafio 1
function validarTexto(texto){
    if(texto.length === 0){return false}
    return true
}

// Desafio 2
function riscarTarefa(p){
    p.style.textDecoration = "line-through"
}

// Desafio 3
function limparTarefas(){
    let dias = document.getElementsByClassName("dia")
    for (let dia of dias){
        dia.innerHTML = ""
    }
}

// Desafio 4

// Desafio 5 no CSS