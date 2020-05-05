// Rodando a função pra criar as horas do dia
limparTarefas()

function adicionarTarefa(){
    let texto = document.getElementById("texto")
    const selectDia = document.getElementById("selectDia").value
    const selectHora = document.getElementById("selectHora").value
    if(validarTexto(texto) && validarDia(selectDia) && validarHora(selectHora)){
        let divDiaHora = document.getElementById(`${selectDia}${selectHora}`)
        divDiaHora.innerHTML += `<li onclick="riscarTarefa(this)">${texto.value}</li>`
        texto.value = ""
    }
}

// Desafio 1
function validarTexto(texto){
    if(texto.value.replace(/ /g,"").length === 0){
        alert('Digite algo!')
        return false
    }
    return true
}

// Desafio 2
function riscarTarefa(li){
    li.style.textDecoration = "line-through"
}

// Desafio 3 e metade do 4
function limparTarefas(){
       let dias = document.getElementsByClassName("dia")
        // <p> com o nome de cada dia
        for (let dia of dias){
            dia.innerHTML = `<p>${dia.id.replace(dia.id.charAt(0),dia.id.charAt(0).toUpperCase())}</p>`
        }
        // Cria uma div pra cada hora do dia - Desafio 4
        for(let dia of dias){
            for(let i = 0; i < 24; i++){
                dia.innerHTML += `<div id="${dia.id}${i}">${i}h:</div>`
            }
        }
}

// Desafio 4 - populando a select de horas
let selectHora = document.getElementById("selectHora")
for(let i = 0; i < 24; i++){
    selectHora.innerHTML += `<option value="${i}">${i}h</option>`
}

// Já que to validando texto, bora validar tudo!
function validarDia(dia){
    if(dia === "vazio"){
        alert('Selecione um dia!')
        return false
    }
    return true
}
function validarHora(hora){
    if(hora === "24"){
        alert('Selecione a hora!')
        return false
    }
    return true
}

// Desafio 5 no CSS