import Texto from './Texto.js'
import {useState} from 'react';
const Formulario = () => {

    const [nome, setNome] = useState("");

    return(
    <div>

        <form>
            Login <input type="text" value={nome} onchange={(e) => setNome(e.target.value)} placeholder='digite seu nome'/>
            Senha <input type="text" value={nome} onchange={(e) => setNome(e.target.value)} placeholder='digite sua senha'/>
        </form>
        <Texto nome={nome}/>
        
    </div>)

}

export default Formulario;