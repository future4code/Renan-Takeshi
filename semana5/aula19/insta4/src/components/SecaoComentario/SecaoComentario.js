import React, {Component} from 'react'
import './SecaoComentario.css'

class SecaoComentario extends React.Component {
	state = {
		valorComentario: ''
	}

	onChangeComentario = (event) => {
		this.setState({
			valorComentario: event.target.value
		})
		console.log(this.state.valorComentario)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}

export default SecaoComentario