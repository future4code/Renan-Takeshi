let arrDespesas = []

function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: parseInt(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }
        arrDespesas.push(novaDespesa)
        console.log(arrDespesas)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        imprimirDespesas(arrDespesas)
    }
}

function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMax = parseInt(document.getElementById('valorFiltroMax').value)
    let valorMin = parseInt(document.getElementById('valorFiltroMin').value)

    let despesasFiltradas = arrDespesas.filter((despesa, idx, arr) => {
        if(despesa.tipo === tipoFiltro && despesa.valor <= valorMax && despesa.valor >= valorMin){
            return true
        }
        return false
    })

    imprimirDespesas(despesasFiltradas)
}

function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p>Despesas Detalhadas</p>'
    despesas.forEach((despesa, idx, arr) => {
        divDespesas.innerHTML += `<p>valor: R$${despesa.valor} | 
                                     tipo: ${despesa.tipo} | 
                                     descrição: ${despesa.descricao}</p>`
    })
}

// Validadores
function validarValor(valor){
    if(valor.value.length > 0){
        return true
    }
    alert('Digite um valor!')
    return false
}
function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    alert('Selecione um tipo!')
    return false
}
function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    alert('Digite uma descrição!')
    return false
}