import { useState } from "react"

import { useState, useEffect } from 'react'

function Comentarios (){
    const [comentario, setComentario] = useState("seu comentario vai ficar aqui")
    function capturaComentario(e){
        setComentario(e.target.value)
    }

    return(
        <>
        <input onChange={capturaComentario} placeholder="Digite seu comentário" />
        <p>{comentario}</p>
        </>
    )
}
 export default Comentarios

 

  