import{FiSearch} from 'react-icons/fi';
import {useState} from 'react';
import './styles.css';
import api from './services/api';


function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    if(input === ''){
      alert('Preencha algum CEP')
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("");
    }
    catch {
      alert('Erro ao buscar o CEP digitado! Digite o CEP corretamente.')
      setInput("");
    }
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

      {Object.keys(cep).length > 0 && (

        <main className='main'>
          <h2> CEP:{cep.cep} </h2>

          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento} </span>
          <span>Bairro: {cep.bairro} </span>
          <span> {cep.localidade} - {cep.uf} </span>
        </main>
      )}
    
    </div>
  );
}

export default App;
