import { useState } from 'react'   //importado do app

function Contador(){
  const [contador, setContador] = useState(0)
  function somar(){
    setContador(contador +1)
  }

    function diminuir(){
      setContador(contador -1)
    }

  return(
    <div className='card'>  
    <button onClick={somar}>
        Soma + 1
    </button>
    <h1>{contador}</h1>
    <button onClick={diminuir}>
        Diminui 1
    </button>
    </div>
  )  
}

export default Contador

// return pra baixo copiado do app
