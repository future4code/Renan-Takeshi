import React from 'react'
import styled from 'styled-components'
import './styles.css'


const TarefaContainer = styled.div`
  display: grid;
  width: 60vw;
  height: 60vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-auto-flow: column;

`

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
    id: 0,
    index: 0,
    completa: false,
    inputValue: '',
    regex: ''
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

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  onChangeRegex = (event) => {
    this.setState({ regex: event.target.value })
  }

  onKeyPressInput = (event) => {
    if (event.key === "Enter" || (event.which === 13)) {
      this.criaTarefa();
    }
  };

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
          filter: '',
          regex: '',
        })
      } else {
        alert('Digite uma tarefa')
      }
    } else {
      const novoTarefas = this.state.tarefas;
      const novaTarefa = {
        id: this.state.id,
        texto: this.state.inputValue,
        completa: this.state.completa,
      }
      novoTarefas.splice(this.state.index, 1,novaTarefa);
      this.setState({
        tarefas: novoTarefas,
        inputValue: '',
        filter: '',
        regex: '',
        id: 0,
      })
    }
  }

  selectTarefa = (id) => {
    if (window.confirm('Precione OK para deletar, Cancel para marcar como completa/pendente')) {
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

  filtrarLista = (lista) => {
    const reg = new RegExp(this.state.regex);
    return lista.filter(tarefa => reg.test(tarefa.texto))
  }

  editarTarefa = (id) => {
    const tarefa = this.state.tarefas.find(tarefa => tarefa.id === id)
    const tarefaIndex = this.state.tarefas.indexOf(tarefa);
    this.setState({
      id: tarefa.id,
      index: tarefaIndex,
      completa: tarefa.completa,
      inputValue: tarefa.texto,
    })
  }

  apagarTodas = () => {
    this.setState({tarefas: []})
  }

  render() {
    const listaPendente = this.state.tarefas.filter(tarefa => !tarefa.completa)
    const listaCompleta = this.state.tarefas.filter(tarefa => tarefa.completa)

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} onKeyPress={this.onKeyPressInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Pesquisar:</label>
          <input value={this.state.regex} onChange={this.onChangeRegex} />
        </InputsContainer>
        <TarefaContainer>
          <TarefaList>
            {this.filtrarLista(listaPendente).map(tarefa => {
              return (
                <Tarefa
                  key={tarefa.id}
                  completa={tarefa.completa}
                  onClick={() => { this.editarTarefa(tarefa.id) }}
                  onDoubleClick={() => { this.selectTarefa(tarefa.id) }}
                >
                  {tarefa.texto}
                </Tarefa>
              )
            })}
          </TarefaList>
          <TarefaList>
            {this.filtrarLista(listaCompleta).map(tarefa => {
              return (
                <Tarefa
                  key={tarefa.id}
                  completa={tarefa.completa}
                  onClick={() => { this.editarTarefa(tarefa.id) }}
                  onDoubleClick={() => { this.selectTarefa(tarefa.id) }}
                >
                  {tarefa.texto}
                </Tarefa>
              )
            })}
          </TarefaList>
        </TarefaContainer>
        <InputsContainer>
          <button onClick={this.apagarTodas}>Apagar</button>
        </InputsContainer>
      </div>
    )
  }
}

export default App
