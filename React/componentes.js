import React, { useState } from 'react';
const Home = () =>{  
  let usuario ="Luis"
  return (
    <React.Fragment>
    <h1>Welcome </h1>
    <div>Usuario:{usuario}</div>    
</React.Fragment>    
 );
}
export default Home;
/*
const Home = () =>{  
    let usuario ="Luis"
    return (
      <h1>Welcome </h1>
      <div>Usuario:{usuario}</div>    
   );
 }
 export default Home;
 */
function Nav() {
    return (
  <React.Fragment> 
    <a href="/index">Inicio</a> 
    <a href="/nosotros">Nosotros</a>
  </React.Fragment> 
  );
  }

  <Home 
    titulo="Mi título" 
    texto="Pasamos props como atributos "
    ></Home>
const App =()=>{
    const numero = 0;
    const contador=()=>{
      numero++
      console.log(numero);
    }
    return(
      <Home 
      contexto={contador}
      texto="Pasamos props como atributos"
      ></Home>
    )
  }
  // export default App;

    const Home2=()=>{
    return(
      <div>

      </div>
    )
  }