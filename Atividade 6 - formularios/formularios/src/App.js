import logo from './logo.svg';
import './App.css';
import Formulario from './componentes/Formulario';
import tech from './imagens/tech.jpeg'
function App() {
  return (
    <div className="App">
      <div className='tech'>
      <img src={tech}/>
      </div>
      <h1>Bem vindo ao J.C tech</h1>
      <div className='forms'>
      <Formulario nome="João" idade="19"/>
      </div>
      
      
    </div>
  );
}

export default App;
