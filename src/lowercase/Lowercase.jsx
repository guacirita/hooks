

function Lowercase(props){
    const textoInserido = props.info 
    const textoTransformado = textoInserido.toLowerCase()

    return(
        <p>{textoTransformado}</p>
    )
}
export default Lowercase