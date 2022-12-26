import React from 'react';
const Home=({addProduct,name,descrip,price,amount,result,changeValue,formRef})=>{
    return(
        <div>
        <form ref={formRef}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" ref={name} name="name" id="name" onChange={changeValue}/>
            </div>
            <div>
                <label htmlFor="descrip">Description</label>
                <input type="text" ref={descrip} name="descrip" id="descrip" onChange={changeValue}/>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="text" ref={price} name="price" id="price" onChange={changeValue}/>
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="text" ref={amount} name="amount" id="amount" onChange={changeValue}/>
            </div>
            
        </form>
        <input type="button"  onClick={addProduct} value="Save"/>
        <ul type="none" ref={result}></ul>
    </div>
    )
}
/*
const Home=({products})=>{
    
    return(
        <ul>
            {products.map((u,i)=><li key={i+"u"}>Nombre{u}</li>)}
        </ul>
    )
}*/
/*
const Home=({changeText,clickEvent,nameRef,lastNameRef,resultRef})=>{

    return(
        <div>
            <form >
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" ref={nameRef} name="name" id="name" onChange={changeText}/>
                </div>
                <div>
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" ref={lastNameRef} name="lastName" id="lastName" onChange={changeText}/>
                </div>
                
            </form>
            <input type="button"  onClick={clickEvent} value="Enviar"/>
            <ul type="none" ref={resultRef}></ul>
        </div>
    )
}*/
/*
const Home = ({ changeText, textRef, resultRef, nameRef }) => {

    return (
        <div className='App' >
            <form onSubmit={changeText} >
                <label>
                    Agregar comentario:
                </label>
                <div>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id='nombre' ref={nameRef} />
                    </div>
                    <textarea ref={textRef} />
                </div>
                <input type="submit" value="Agregar" />
            </form>
            <div ref={resultRef}>Comentarios:</div>
        </div>
    )
}
*/
/*
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
*/
/*
const Home = () =>{  
    return (
     <div>
         <h1>!Hola mundo!</h1>
     </div>
   );
 }*/
/*
const Home = () => {
   let usuario = "Luis Navas"
   return (
       <React.Fragment>
           <h1>Welcome </h1>
           <div>User: {usuario}</div>
       </React.Fragment>
   );
}*/
/*
const Home=(
    {
        titulo,
        texto,
        changeText,
        clickText,
        inputRef,
        resultRef
    }
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
*/
/*
const Home=({contador})=>{
    return(
        <div>
            <button onClick={contador}>Incrementar</button>
        </div>
    )
}*/

export default Home;