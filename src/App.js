import{FiSearch} from 'react-icons/fi';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite o CEP..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>
    </div>
  );
}

export default App;
