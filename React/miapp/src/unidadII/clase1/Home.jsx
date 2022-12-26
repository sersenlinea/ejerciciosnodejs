import React from 'react';
// Hola Mundo
/*
const Home = () =>{  
    return (
     <div>
         <h1>!Hola mundo!</h1>
     </div>
   );
 }
*/
/**Con Fragment */
function Home() {
    let usuario = "Luis Navas"
    return (
  <React.Fragment>
      <h1>Welcome </h1>
    	<div>Usuario: {usuario}</div>    
  </React.Fragment>
  );
}

export default Home;