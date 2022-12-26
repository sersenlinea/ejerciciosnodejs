//products
/*
const Home =({add,products})=>{
    return(
        <div>
      <div>
        <button onClick={add}>Agregar</button>
      </div>
      <div>
        <h4>Productos</h4>
      <ul>
    {products.map(p=>{return <li>{p.name}</li>})}
  </ul>
      </div>
    </div>
    )
}
*/

import { useState } from "react"

const Home =()=>{
  const [value,setValue]=useState(true);
  const [saludo,setSaludo]=useState('Hola ')
  function change(){
    if (value) {
      setSaludo('Hola ')
      setValue(false)
    }
    else{
      setSaludo('Chao ')
      setValue(true)
    }
  }
return(
  <div>
    <h1>Mi App</h1>
    <p>{saludo} Usuario</p>
    <button onClick={change}>Logout</button>
    </div>
)
}
export  default Home