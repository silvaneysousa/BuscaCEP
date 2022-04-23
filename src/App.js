import{FiSearch} from 'react-icons/fi';
import {useState} from 'react';
import './styles.css';


function App() {
  const [input, setInput] = useState('')

  function handleSearch(){
    alert("Clicou" + input)
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite o CEP...."
        value={input}
        onChange={ (cepdigit) => setInput(cepdigit.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className='main'>
        <h2> CEP: 71880043</h2>

        <span>Rua Teste 01</span>
        <span>Complemento: Algum complemento</span>
        <span>Bairro: Cidade Jardins</span>
        <span>Valparaíso de Goiás - GO</span>
      </main>
    
    </div>
  );
}

export default App;
