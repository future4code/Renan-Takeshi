import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Batman'}
          fotoUsuario={'https://c7.uihere.com/files/579/761/149/batman-arkham-asylum-joker-harley-quinn-lego-batman-batman-thumb.jpg'}
          fotoPost={'https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:fafafa,c_scale,dpr_3.0,f_auto,w_500/5492733_png/batmobile-swarovski-5492733.png'}
        />
        <Post
          nomeUsuario={'Robin'}
          fotoUsuario={'https://img.favpng.com/1/11/22/batman-nightwing-robin-youtube-lego-png-favpng-nPK8DVQgz23HbHnt3cDVVVpcj.jpg'}
          fotoPost={'https://s2.glbimg.com/KiQCUZ25mcJU_k6rxfKvahh4faw=/695x0/s.glbimg.com/po/tt2/f/original/2015/05/14/robin-101.jpg'}
        />
      </div>
    );
  }
}

export default App;
