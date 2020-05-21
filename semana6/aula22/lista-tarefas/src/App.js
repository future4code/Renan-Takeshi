import React from 'react'
import styled from 'styled-components'
import './styles.css'


const TarefaContainer = styled.div`
  display: grid;
  width: 60vw;
  height: 60vh;
  grid-auto-flow: column;
`

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
  margin-right: 20px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  word-wrap: break-word;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    id: 0,
    index: 0,
    completa: false,
    regex: '',
    ordenacao: 'Cronológica',
  }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  }

  componentDidMount() {
    const tarefasStr = localStorage.getItem('tarefas')
    if (tarefasStr) {
      const tarefasObj = JSON.parse(tarefasStr)
      this.setState({ tarefas: tarefasObj })
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  onChangeRegex = (event) => {
    this.setState({ regex: event.target.value })
  }

  onKeyPressInput = (event) => {
    if (event.key === "Enter" || (event.which === 13)) {
      this.criaTarefa();
    }
  }

  validarTexto = (texto) => {
    if (texto.replace(/ /g, "").length) {
      return true
    }
    return false
  }

  criaTarefa = () => {
    if (!this.state.id) {
      const textoTarefa = this.state.inputValue;
      if (this.validarTexto(textoTarefa)) {
        const novaTarefa = {
          id: Date.now(),
          texto: this.state.inputValue,
          completa: false,
        }
        const novoTarefas = [...this.state.tarefas, novaTarefa]
        this.setState({
          tarefas: novoTarefas,
          inputValue: '',
          regex: '',
          id: 0,
        })
      } else {
        alert('Digite uma tarefa')
      }
    } else {
      const textoTarefa = this.state.inputValue;
      if (this.validarTexto(textoTarefa)) {
        const novoTarefas = this.state.tarefas;
        const novaTarefa = {
          id: this.state.id,
          texto: this.state.inputValue,
          completa: this.state.completa,
        }
        novoTarefas.splice(this.state.index, 1, novaTarefa);
        this.setState({
          tarefas: novoTarefas,
          inputValue: '',
          regex: '',
          id: 0,
        })
      } else {
        this.deletarTarefa(this.state.id)
      }
    }
    this.inputTarefa.focus();
  }

  selectTarefa = (id) => {
    if (window.confirm('Precione OK para deletar, Cancel para marcar como completa/pendente')) {
      this.deletarTarefa(id)
    } else {
      this.riscarTarefa(id)
    }
  }

  riscarTarefa = (id) => {
    const novoTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({
      tarefas: novoTarefas,
      inputValue: '',
      id: 0,
    })
  }

  // Desafio 1
  deletarTarefa = (id) => {
    const novoTarefas = this.state.tarefas.filter(tarefa => tarefa.id !== id)
    this.setState({
      tarefas: novoTarefas,
      inputValue: '',
      id: 0,
    })
  }

  // Desafio 3
  editarTarefa = (id) => {
    const tarefa = this.state.tarefas.find(tarefa => tarefa.id === id)
    const tarefaIndex = this.state.tarefas.indexOf(tarefa);
    this.setState({
      id: tarefa.id,
      index: tarefaIndex,
      completa: tarefa.completa,
      inputValue: tarefa.texto,
    })
    this.inputTarefa.focus()
  }

  // Desafio 4
  apagarTodas = () => {
    this.setState({
      tarefas: [],
      inputValue: '',
      id: 0,
      index: 0,
      completa: false,
      regex: '',
      ordenacao: 'Cronológica'
    })
  }

  // Desafio 5 e 6
  ordenarPesquisarLista = (lista) => {
    switch (this.state.ordenacao) {
      case 'Crescente':
        lista.sort((a, b) => { return a.texto.toLowerCase() >= b.texto.toLowerCase() ? 1 : -1 })
        break
      case 'Decrescente':
        lista.sort((a, b) => { return a.texto.toLowerCase() > b.texto.toLowerCase() ? -1 : 1 })
    }
    if (this.state.regex) {
      const reg = new RegExp(this.state.regex, 'i');
      return lista.filter(tarefa => reg.test(tarefa.texto))
    }
    return lista
  }

  limparPesquisa = () => {
    this.setState({regex: ''})
  }

  // Desafio 6
  ordenarCrescente = () => {
    this.setState({ ordenacao: 'Crescente' })
  }

  ordenarDecrescente = () => {
    this.setState({ ordenacao: 'Decrescente' })
  }

  ordenarCronologica = () => {
    this.setState({ ordenacao: 'Cronológica' })
  }


  render() {
    const listaPendente = this.state.tarefas.filter(tarefa => !tarefa.completa)
    const listaCompleta = this.state.tarefas.filter(tarefa => tarefa.completa)

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input
            ref={(element) => { this.inputTarefa = element; }}
            value={this.state.inputValue}
            onChange={this.onChangeInput}
            onKeyPress={this.onKeyPressInput}
          />
          <button onClick={this.criaTarefa}>{!this.state.id ? 'Adicionar' : 'Editar'}</button>
          {Boolean(this.state.id) && <button onClick={() => { this.deletarTarefa(this.state.id) }}>Deletar</button>}
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Pesquisar:</label>
          <input value={this.state.regex} onChange={this.onChangeRegex} />
          <button onClick={this.limparPesquisa}>Limpar</button>
        </InputsContainer>
        <TarefaContainer>
          <div></div>
          <TarefaList>
            <h2>Pendentes</h2>
            {this.ordenarPesquisarLista(listaPendente).map(tarefa => {
              return (
                <Tarefa
                  key={tarefa.id}
                  completa={tarefa.completa}
                  onClick={() => { this.editarTarefa(tarefa.id) }}
                  onDoubleClick={() => { this.riscarTarefa(tarefa.id) }}
                >
                  {tarefa.texto}
                </Tarefa>
              )
            })}
          </TarefaList>
          <TarefaList>
            <h2>Completas</h2>
            {this.ordenarPesquisarLista(listaCompleta).map(tarefa => {
              return (
                <Tarefa
                  key={tarefa.id}
                  completa={tarefa.completa}
                  onClick={() => { this.editarTarefa(tarefa.id) }}
                  onDoubleClick={() => { this.riscarTarefa(tarefa.id) }}
                >
                  {tarefa.texto}
                </Tarefa>
              )
            })}
          </TarefaList>
        </TarefaContainer>
        <p>Ordenação atual: {this.state.ordenacao}</p>
        <InputsContainer>
          <button onClick={this.ordenarCrescente}>Crescente</button>
          <button onClick={this.ordenarDecrescente}>Decrescente</button>
          <button onClick={this.ordenarCronologica}>Cronológica</button>
        </InputsContainer>
        <br />
        <p>Apagar todas as tarefas:</p>
        <InputsContainer>
          <button onClick={this.apagarTodas}>Apagar</button>
        </InputsContainer>
      </div>
    )
  }
}

export default App
