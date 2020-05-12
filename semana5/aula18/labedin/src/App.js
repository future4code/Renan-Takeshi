import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import location from './media/location.png'
import mail from './media/mail.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars3.githubusercontent.com/u/10583511?s=400&u=e36b1a1945ee7d6811bfda30998a8e4199dae440&v=4" 
          nome="Renan Takeshi" 
          descricao="Não sou o Batman, mas somos amigos próximos. Se desejar, posso encaminhar sua mensagem para ele."
        />
        <CardPequeno
          imagem={mail}
          texto="eusoubatman@batcave.com"
        />
        <CardPequeno
          imagem={location}
          texto="Beco do Batman, 37"
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.pngkey.com/png/detail/119-1194775_batman-pow-logo-3-by-nicholas-batman.png" 
          nome="Gotham City" 
          descricao="Eu sou a noite combatendo o crime!" 
        />
        
        <CardGrande 
          imagem="https://miro.medium.com/max/640/1*0ZajHBkV09OjIYLsvr81lQ.jpeg" 
          nome="Wayne Manor" 
          descricao="Playboy bilionário mantendo as aparências." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
