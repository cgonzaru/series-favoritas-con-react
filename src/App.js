import React from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Favs from './components/Favs';

const buttonText = 'Buscar :)';
const labelText = 'Busca tu serie favorita';
const placeholderText = 'Escribe el nombre de una serie';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Mis series favoritas</h1>
        <Search 
          textoDelBoton={buttonText}
          textoDelLabel={labelText}
          textoDelPlaceholder={placeholderText}
        />

        <Results />

        <Favs />

      </div>
    );
  }
}

export default App;
