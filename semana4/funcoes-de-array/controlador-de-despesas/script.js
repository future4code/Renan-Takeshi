let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()

function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    despesas.forEach((despesa, idx, arr) => {
        divDespesas.innerHTML += `<p>valor: R$${despesa.valor} | 
                                     tipo: ${despesa.tipo} | 
                                     descrição: ${despesa.descricao}</p>`
    })
}

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

        limparFiltros() // Esta função chama imprimirDespesas
        imprimirExtrato()
    }
}

function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = parseInt(document.getElementById('valorFiltroMin').value)
    let valorMax = parseInt(document.getElementById('valorFiltroMax').value)

    if(validarMinMax(valorMin, valorMax)){
        let despesasFiltradas = arrDespesas.filter((despesa, idx, arr) => {
            if((despesa.tipo === tipoFiltro || tipoFiltro === "todos") && despesa.valor <= valorMax && despesa.valor >= valorMin){
                return true
            }
            return false
        })
        imprimirDespesas(despesasFiltradas)
    }
}

function limparFiltros(){
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
    imprimirDespesas(arrDespesas)
}

function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0

    arrDespesas.forEach((despesa, idx, arr) => {
        gastoTotal += despesa.valor
        switch(despesa.tipo){
            case "alimentação":
                gastoAlimentacao += despesa.valor
                break;
            case "utilidades":
                gastoUtilidades += despesa.valor
                break;
            case "viagem":
                gastoViagem += despesa.valor
                break;
        } // Fim do switch
    }) // Fim do forEach

    divExtrato.innerHTML = `<p><u>Extrato</u></p>
                            <p>Gasto Total: R$${gastoTotal}</p>
                            <p>Alimentação: R$${gastoAlimentacao}</p>
                            <p>Utilidades:  R$${gastoUtilidades}</p>
                            <p>Viagem:      R$${gastoViagem}</p>`
}

// Validadores
function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    alert('Digite um valor válido!')
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
function validarMinMax(min, max){
    if(min.toString().length > 0 && max.toString().length > 0 && min <= max){
        return true
    }
    alert('Valores mínimo e máximo inválidos!')
    return false
}