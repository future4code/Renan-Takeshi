import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(), // Explicação abaixo
        texto: 'Texto da tarefa',
        completa: false // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now() + 1, // Explicação abaixo
        texto: 'Texto da tarefa',
        completa: true // Indica se a tarefa está completa (true ou false)
      }
    ],
    inputValue: '',
    filter: ''
  }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasStr = localStorage.getItem('tarefas')
    if (tarefasStr) {
      const tarefasObj = JSON.parse(localStorage.getItem('tarefas'))
      this.setState({ tarefas: tarefasObj })
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const textoTarefa = this.state.inputValue;
    if (this.validarTexto(textoTarefa)) {
      const novaTarefa = {
        id: Date.now(),
        texto: textoTarefa,
        completa: false,
      }
      const novoTarefas = [...this.state.tarefas, novaTarefa]
      this.setState({
        tarefas: novoTarefas,
        inputValue: '',
        filter: '',
      })
    } else {
      alert('Digite uma tarefa')
    }
  }

  selectTarefa = (id) => {
    if (window.confirm('Precione OK para deletar, Cancel para marcar como completa')) {
      this.deletarTarefa(id)
    } else {
      this.riscarTarefa(id)
    }
  }

  deletarTarefa = (id) => {
    const novoTarefas = this.state.tarefas.filter(tarefa => tarefa.id !== id)
    this.setState({ tarefas: novoTarefas })
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
    this.setState({ tarefas: novoTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  onKeyPressInput = (event) => {
    if (event.key === "Enter" || (event.which === 13)) {
      this.criaTarefa();
    }
  };

  validarTexto = (texto) => {
    if (texto.replace(/ /g, "").length !== 0) {
      return true
    }
    return false
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} onKeyPress={this.onKeyPressInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
