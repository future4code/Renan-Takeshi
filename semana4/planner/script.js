function adicionarTarefa(){
    let texto = document.getElementById("texto")
    if(validarTexto(texto.value)){
        let divDia = document.getElementById(document.getElementById("dia").value)
        divDia.innerHTML += `<li onclick="riscarTarefa(this)">${texto.value}</li>`
        texto.value = ""
    }else{
        alert('Digite algo!')
    }
}

// Desafio 1
function validarTexto(texto){
    if(texto.replace(/ /g,"").length === 0){return false}
    return true
}

// Desafio 2
function riscarTarefa(li){
    li.style.textDecoration = "line-through"
}

// Desafio 3
function limparTarefas(){
    if(confirm('Deseja limpar todas as tarefas ?')){
       let dias = document.getElementsByClassName("dia")
        for (let dia of dias){
            dia.innerHTML = `<p>${dia.id.replace(dia.id.charAt(0),dia.id.charAt(0).toUpperCase())}</p>`
        }
    }
}

// Desafio 4


// Desafio 5 no CSS

// Pra funcionar quando apertar Enter
const texto = document.getElementById("texto");
texto.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("botao").click();
    }
})
const select = document.getElementById("dia");
select.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
})
select.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("botao").click();
    }
})