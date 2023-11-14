function Pessoa(props){

    return(
        <div className="jose"> 
            <img src={props.foto} alt={props.nome1}/>
            <h2>Nome: {props.nome1}</h2>
            <h2>Idade: {props.idade}</h2>
            <h2>Profissão: {props.profissao}</h2>
            <h2>{props.ola}</h2>
        </div>
    )

}

export default Pessoa