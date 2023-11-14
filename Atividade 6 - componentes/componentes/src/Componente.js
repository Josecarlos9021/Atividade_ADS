function Componente(props) {

    return(
    <div>
    <div className="professora">
      <h2>{props.ola}, professora {props.nome}, tranquilo?</h2>
    </div>
    </div>
    )
}

export default Componente