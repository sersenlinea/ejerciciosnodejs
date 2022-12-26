/*
const Home=({saludo,bienvenida})=>{
  console.log(saludo);
  console.log(bienvenida);
  return(
      <div>
          <h2>{bienvenida}</h2>
          <h2>{saludo}</h2>
      </div>
  )
}
export default Home;
*/
/*eventos*/
/**
const Home=({contador})=>{
  return(
      <div>
          <button onClick={contador}>Incrementar</button>
      </div>
  )
}
export default Home;
*/
/*otro ejemplo*/
/*
const Home=({titulo,texto})=>{
  return(
      <div>
          <h2>{titulo}</h2>
          <h2>{texto}</h2>
      </div>
  )
}
export default Home;*/

// ejemplo con array

import React from 'react';
const Home=({users})=>{
    return(
        <ul>
            {/* {users.map(u=><li>{u}</li>)} */}
            <ul>
  {users.map((u,i)=><li key={i+"u"}>{u}</li>)}
</ul>
        </ul>
    )
}


export default Home;

