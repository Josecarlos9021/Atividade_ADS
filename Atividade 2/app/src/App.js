import logo from './logo.svg';
import './App.css';
import rindo from './imagens/emojirindo.jpeg'
import alegre from './imagens/alegre.jpeg'
import festa from './imagens/festa.png'
import bailarina from './imagens/bailarina.png'
function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <img src={rindo} title='Sorrindo' height='100px' hidth='100px'/>
      <p>Clique no emoji para exibir o nome dele!</p>
      <img src={alegre} title='Alegre' height='40px' hidth='40px' hspace='20'/>
      <img src={festa} title ='Festa' height='40px' hidth='40px' hspace='20'/>
      <img src={bailarina} title ='Dançando' height='40px' hidth='40px' hspace='20'/>
    </div>
  );
}

export default App;
