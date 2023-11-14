import logo from './logo.svg';
import './App.css';
import Componente from './Componente.js';
import Pessoa from './Pessoa.js'
import astronauta from './imagens/Astronauta.jpg'

function App() {
  const foto ='./imagens/Likendin.png'
  return (
    <div className="App">
      <h1 className="titulo">Currículo</h1>
      <Componente nome="Claudy" ola="Olá"/>
      <div>
      <h1 className="faz">O que ele faz:</h1>
      <Pessoa 
      nome1="José Carlos" 
      idade="19" 
      profissao="Aceito pix :)"
      foto={foto}/>
      {/* Não conseguir colocar a foto pelo props */}
      </div>
    </div>
  )
}

export default App
