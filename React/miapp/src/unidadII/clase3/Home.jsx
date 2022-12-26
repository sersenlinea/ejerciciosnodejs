/*import React from 'react';
const Home=(
   {titulo, texto, changeText, clickText, inputRef, resultRef }
    )=>{
    return(
        <div>
            <h2>{titulo}</h2>
            <h2>{texto}</h2>
            <textarea
            onChange={changeText}
            type={'text'}
            ref={inputRef}/>
            <input
            onClick={()=>clickText()}
            type={'button'}
            value="Crear"/>
            <div
            ref={resultRef}
            >
            </div>
        </div>
    )
}
export default Home;
*/
/**otro ejemplo */
/*
import React from 'react';
 
const Home=({titulo,texto,optionRef,changeText,resultRef})=>{
    return(
        <div>
            <h2>{titulo}</h2>
            <h2>{texto}</h2>
        <label>
          Elegí tu lenguaje favorito:
            <select ref={optionRef} onChange={()=>changeText()}>
                <option  value="C++">C++</option>
                <option  value="Javascript">Javascript</option>
                <option  value="Nodejs">Nodejs</option>
                <option value="java">java</option>
            </select>
            </label>
            <div ref={resultRef}></div>
        </div>
        )
}

export default Home;
*/

/**onClick */

import React from 'react';
const Home=({changeText,clickEvent,nameRef,lastNameRef,resultRef})=>{
    return(
     <div>
         <form >
             <div>
                 <label htmlFor="name">Nombre</label>
          <input type="text" ref={nameRef} name="name" id="name"
           onChange={changeText}/>
                </div>
                <div>
                    <label htmlFor="lastName">Apellido</label>
                 <input type="text" ref={lastNameRef} name="lastName" 
                 id="lastName" onChange={changeText}/>
                </div>
               
            </form>
            <input type="button"  onClick={clickEvent} value="Enviar"/>
            <ul type="none" ref={resultRef}></ul>
        </div>
    )
}
export default Home;
