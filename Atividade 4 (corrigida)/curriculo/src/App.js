import logo from './logo.svg';
import './App.css';
import superman from './imagens/superman.png'

function App() {
  return (
    <div className="App">
      <img src={superman} width='200px' height='200px'/>
      <div className="App-text">
      <p>Clark kent Samsung Apple da Silva</p>
      <p>Telefone: 4002-8922</p>
      <p>E-mail: Clarkkent@gmail.com</p>
      </div>
      <div className="Formação-text">
      <p>Objetivo</p>
      </div>
      <div className="Body-text">
      <p>Meu objetivo é aplicar minhas habilidades e experiência para superar desafios e criar soluções excepcionais, assim como o Superman salva o mundo de ameaças.</p>
      <p>Estou comprometido em contribuir de forma heroica para o sucesso da equipe e da organização em todos os aspectos.</p>
      </div>
      <div className="Formação-text">
        <p>Formação</p>
      </div>
      <div className="Body-text">
          <ul>
          <li>EREM confederação do Equador</li>
          <li>Ensino médio completo</li>
          <li>Conclusão 2019-2021</li>
          </ul>
          <ul>
          <li>Uninassau</li>
          <li>Análise e Desenvolvimento de Sistemas</li>
          <li>Concusão 2023-2025</li>
          </ul>
      </div>
    </div>
  );
}

export default App;
