import logo from './logo.svg';
import './App.css';
import netflix from './imagens/netflix.png'
function App() {
  const estilocaixa = {
    width: '400px',
    height: '40px',
  }
  return (
    <div className="App">
     <img src={netflix} title='NETFLIX' width='300px' height='100px'/>
     <div className='botão2'>
        <button className='corbutton2'>ENTRAR</button>
      </div>
     <p className='cor1'>
     <h1>Os maiores sucessos do Brasil e do mundo.</h1>
     <h1>Tudo na Netflix a partir de BRL18.90.</h1>
     <h5>Assine hoje, cancele quando quiser. Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h5>
     <h5>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h5>
     </p>
     <div className="Caixa">
      <input type='text' placeholder='E-mail' style={estilocaixa}/>
      <div className='botão'>
        <button className='corbutton'>Vamos lá!</button>
      </div>
      </div>
     </div>
  );
}

export default App;
