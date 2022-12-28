// import logo from './logo.svg';
// import { useState } from 'react';// import './App.css';
// import Home from './clase1/Home'
// import { useState,useRef } from 'react';

//Unidad I clase 5
/*
import Home from './unidadI/clase5/Home'

const App=()=>{

  return(
    <div>
      <Home/>
    </div>
  )
}
*/

//Unidad II clase 1
/*
import Home from './unidadII/clase1/Home'

const App = () =>{  
  return (
   <div>
       <Home/>
   </div>
 );
}
*/
//Unidad II clase 2 Props
/*
import Home from './unidadII/clase2/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Home
    saludo="Hola desde el componente padre"
    bienvenida="Bienvenid@s a mi sitio"
    >
</Home>
      </header>
    </div>
  );
}
*/
/*Eventos */
/*
import Home from './unidadII/clase2/Home'
function App() {
  let numero = 0;
  const contador = () => {
    numero++
    console.log(numero);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Home
          contador={contador}
        >
        </Home>
        otro ejemplo
        <Home
    titulo="Mi título"
    texto="Pasamos props como atributos "
    >
</Home>
      </header>
    </div>
  );
}

*/
/*
import Home from './unidadII/clase2/Home'
const App=()=>{
  let listUsers = ["Ramón", "Juan", "Alejandro"];
  return(
    <div>
      <Home users={listUsers}/>
    </div>
  )
}

*/
// ----Unidad II Clase 3 Prefijo On eventos camelCase-----------------
/**Evento  onChange */
/*
import Home from './unidadII/clase3/Home'
import { useRef } from 'react';
const App=()=>{
  const inputRef=useRef(null);
  const resultRef=useRef(null);
  const changeText=()=>{
      console.log(inputRef.current.value);
  }
  const clickText=()=>{
      resultRef.current.innerHTML = inputRef.current.value
  }
  return(
    <Home
    titulo="Mi título"
    texto="Pasamos props como atributos"
    inputRef={inputRef}
    resultRef={resultRef}
    changeText={changeText}
    clickText={clickText}
    />
  )
}
*/
/**otro ejemplo */
/*
import Home from './unidadII/clase3/Home'
import { useRef } from 'react';
const App=()=>{
  const optionRef=useRef(null);
  const resultRef=useRef(null);
  const changeText=()=>{
      // console.log(optionRef.current.value);
      resultRef.current.innerHTML=`<p>Tu lenguaje favorito es: 
      ${optionRef.current.value}</p>`
  }
  return(
    <Home
    titulo="Mi título"
    texto="Usando eventos"
    optionRef={optionRef}
    resultRef={resultRef}
    changeText={changeText}
    />
  )
}
*/
/**onClick */
/*
import './App.css';
import { useRef } from 'react';
import Home from './unidadII/clase3/Home'
const App=()=>{
  const nameRef=useRef(null)
  const lastNameRef=useRef(null)
  const resultRef=useRef(null)
  let data = {}
  let info=[]
  const changeText=(e)=>{
    e.preventDefault();
    console.log();
    data[nameRef.current.name]=nameRef.current.value;
    data[lastNameRef.current.name]=lastNameRef.current.value;
   
  }
  const clickEvent=()=>{
    info =[...info,data];
    nameRef.current.value=' '
    lastNameRef.current.value=' '
    data = {}
    resultRef.current.innerHTML=' '
    info.forEach(element => {
      resultRef.current.innerHTML+=`
      <li>Nombre ${element.name} Apellido ${element.lastName} </li>`
    });
    //
  }
  return(
    <Home
    changeText={changeText}
    clickEvent={clickEvent}
    nameRef={nameRef}
    lastNameRef={lastNameRef}
    resultRef={resultRef}
    />
  )
}
*/


// --------------Unidad III clase 1-------------------------------

// import { useState} from 'react';  
// import Home from './unidadIII/clase1/Home'
// const App=()=>{
//   const [products,setProducts]=useState([])
//   const [product,setProduct]=useState({})
//   const add=()=>{
//     let newData= {name:"Notebook 15 pulgadas",precio:250000,marca:"Acer"};
//     let prods = [...products,newData];
//     setProducts(prods)
//   }
  
//   return(
//     <Home 
//     add={add}
//     product={product}
//     products={products}
//     setProduct={setProduct}
//     setProducts={setProducts}
//     />
//   )
// }


// clase 2

// import Home from './unidadIII/clase2/Home';

// function App() {
  

//   return (
//     <div>
//     <Home/>
//     </div>
//   );
// }

// clase 3

// import Layout from './unidadIII/clase3/Layout';
// import ThemeContext, { themes } from './unidadIII/clase3/context'
// import { useState } from 'react';
// import Body from './unidadIII/clase3/Body'
// import Nav from './unidadIII/clase3/Navbar' 
// function App() {
  
//   const [theme, setTheme] = useState(themes.light);
//   const handleChangeTheme = () => {
//     if (theme === themes.dark) setTheme(themes.light)
//     if (theme === themes.light) setTheme(themes.dark)
//   }
//   return (
//     <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
//     <Layout>
//       <Nav/>
//       <Body/>
//       </Layout>
//     </ThemeContext.Provider>
//   );
// }
// export default App;



//Clase 4
/*
import { useRef, useState } from 'react';
import Home from './unidadIII/clase4/Home'
const App=()=>{
  let item={}
  const [mascotas,setMascotas]=useState([])
  const [mascota,setMascota]=useState({})
  const resultRef=useRef(null)
  const nameRef=useRef(null)
  const edadRef=useRef(null)
  const especieRef=useRef(null)
  const duenioRef=useRef(null)
  const emailDuenioRef=useRef(null)
  const formRef=useRef(null)

  const changeValue=()=>{
   
    item[nameRef.current.name]=nameRef.current.value;
    item[edadRef.current.name]=edadRef.current.value;
    item[especieRef.current.name]=especieRef.current.value;
    item[duenioRef.current.name]=duenioRef.current.value;
    item[emailDuenioRef.current.name]=emailDuenioRef.current.value;
    setMascota(item)

  }
  const addMascota=()=>{
    let dataActual = mascotas;
    let data=[...dataActual,mascota]
    setMascotas(data)
   
    for (let i = 0; i < formRef.current.length; i++) {
      console.log(formRef.current[i].value);
    }
  
      console.log(formRef.current[0].value);
  
    resultRef.current.innerHTML=' ';
    data.map((p,i)=>resultRef.current.innerHTML+=`
    <div class="App-header">
    <span ><b>Name:</b> ${p.name}</span>
    <span><b>Age:</b> ${p.age}</span>
    <span><b> Especies:</b> ${p.especies}</span>
    <span><b> Owner:</b> ${p.owner}</span>
    <span><b> Email:</b> ${p.email}</span>
    </div>`)
    data=[]
    nameRef.current.value=''
    edadRef.current.value=''
    especieRef.current.value=''
    duenioRef.current.value=''
    emailDuenioRef.current.value=''
    

  }

  return(
    <div>
      <Home 
      changeValue={changeValue} 
      addPets={addMascota}
      name={nameRef}
      age={edadRef}
      especies={especieRef}
      owner={duenioRef}
      result={resultRef}
      formRef={formRef}
      email={emailDuenioRef}
      />
      
    </div>
  )
}

export default App;
*/

// -------------UNIDAD IV----------

//clase 1
/*
import Home from "./unidadIV/clase1/Home";
const  App=()=>{
  const [favorite,setFavorite]=useState(true);
  const changeFavorite=()=>{
    favorite?setFavorite(false):setFavorite(true)
  }
  return(
    <div>
      <Home favorite={favorite} addFavorite={changeFavorite}/>
    </div>
  )

}
export default App;
*/
//clase 2
/*
import React, { useRef, useState } from 'react';
import Login from './unidadIV/clase2/Login'
import Perfil from './unidadIV/clase2/Perfil'
const App=()=>{

  let data={}
  const [user,setUser]=useState('');
  const [view,setView]=useState(false);
  const userRef=useRef(null)
  const passRef=useRef(null)
  const miUser={
    user:"lpipnavas@gmail.com",
    password:"123456"
  }
  const logIn=()=>{
    if (data.user===miUser.user && data.password === miUser.password) {
        setUser(data.user)
    }
    setView(data.user===miUser.user && data.password === miUser.password);
  }
  const changeValue=()=>{
    data[userRef.current.name]=userRef.current.value;
    data[passRef.current.name]=passRef.current.value;
  }
  return(
    <React.Fragment>
    {
      view ? <Perfil user={user}/>:<Login changeValue={changeValue} user={userRef} password={passRef} login={logIn}/>
    }
    </React.Fragment>
  )
}

export default App;*/
/*
import Formik from './unidadIV/clase3/Formik'

const App=()=>{
  let initialValues = {
    accountType:"personal"
  }
  const onSubmit=()=>{
    alert()
  }
  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit}/>
  )
}

export default App;
*/
//Unidad V
// clase 1
/*
import MyButton from './unidadV/clase1/MyButton'

const App=()=>{
  return(
    <MyButton />
 )
}
export default App;
*/
//clase 2
/*
import Button from './unidadV/clase2/Button'
import Home from './unidadV/clase2/Home'
import Template from './unidadV/clase2/Template'
import {useState} from 'react'
export default function App(){
 

  const [view,setView]=useState(true);
  const cambiarPagina=()=>{
    setView(view?false:true)
  }
  return(<div >
    
    <Button cambiarPagina={cambiarPagina}/>
    {view?<Home/>:<Template/>}
  </div>)
}


*/
//clase 3 

/*
import Dog from './unidadIV/clase3/formikBasico'

export default function App(){

  return(
    <div>
      <Dog/>
    </div>
  )
}
*/
//clase 4
/*
import CharactersList from './unidadV/clase4/CharactersList'

export default function App(){

  return(
    <div>
      <CharactersList/>
    </div>
  )
}
*/

//clase 5
/*
import UserList from './unidadV/clase5/UserList'
import ListNumbers from './unidadV/clase5/ListNumber'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Container,Grid, Box,CssBaseline} from '@mui/material';
import {useState} from 'react'
export default function App(){
  let data =[
    {id: 12345,
      name:"Luis Navas",
      email:"lpipnavas@gmail.com", 
      src:"https://pbs.twimg.com/profile_images/484370751361781761/tgq1CPGP_400x400.jpeg"},
    {id: 12346,
      name:"Luciana Alvarez",
      email:"lualvarez@gmail.com",
      src:"https://pbs.twimg.com/profile_images/2168022144/IMG01098-20120221-0816_400x400.jpg"},
    {id: 12347,
      name:"Juan Oropeza",
      email:"pezajuan@gmail.com",
      src:"https://alchetron.com/cdn/juan-oropeza-fcdea8db-5179-4603-8c35-b2662b7ab40-resize-750.jpeg"},
    {id: 12348,
      name:"Julián Pérez",
      email:"pjuli@gmail.com",
      src:"https://i1.sndcdn.com/avatars-000690548765-srqy7t-t500x500.jpg"},
    {id: 12349,
      name:"Carmen Sanabria",
      email:"carmens22@gmail.com",
      src:"https://acordesweb.com/img/carmen-sanabria-a3d4f33f37e0bf747a465a2829899049.jpg"},
    {id: 12350,
      name:"Antonio Guzmán",
      email:"aguzman19@gmail.com",
      src:"https://piel-l.org/blog/wp-content/uploads//2020/10/dr-fawcet.jpg"}
  ]
  
  const [users,setUsers]=useState(data)
  const handleDelete=(id)=>{
    let newUsers = users.filter(u=>u.id!==id)
    setUsers(newUsers);
    data=users
  }
  const theme = createTheme();
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
          sx={{
            bgcolor: 'background.secondary',
            pt: 8,
            pb: 6,
          }}
        >
       <Container sx={{ py: 2 }} maxWidth="md">
       <Grid container spacing={2}>
      <UserList users={users} handleDelete={handleDelete}/>
      </Grid>
      </Container>
      </Box>
    </ThemeProvider>
    
  )
}
*/

// Clase 6
import UserList from './unidadV/clase6/ListUsers'
export default function App(){ 
  let numbers = [3,19,52,47,58,614,21,66,8881,64,4];
  return(
    <UserList>
  {numbers}
</UserList>
  )

}

/*
const App=()=>{
  const nameRef=useRef(null)
  const lastNameRef=useRef(null)
  const resultRef=useRef(null)
  let data = {}
  let info=[]
  const changeText=(e)=>{
    e.preventDefault();
    console.log();
    data[nameRef.current.name]=nameRef.current.value;
    data[lastNameRef.current.name]=lastNameRef.current.value;
    
  }
  const clickEvent=()=>{
    info =[...info,data];
    nameRef.current.value=' '
    lastNameRef.current.value=' '
    data = {}
    resultRef.current.innerHTML=' '
    info.forEach(element => {
      resultRef.current.innerHTML+=`
      <li>Nombre ${element.name} Apellido ${element.lastName} </li>`
    });
    // 
  }
  return(
    <Home 
    changeText={changeText} 
    clickEvent={clickEvent}
    nameRef={nameRef}
    lastNameRef={lastNameRef}
    resultRef={resultRef}
    />
  )
}
*/
/*
function App() {
 /* let numero = 0;
  const contador = () => {
    numero++
    console.log(numero);
  }*/
  /*
  return (
    <div className="App">
      <header className="App-header">
         <Home
          contador={contador}
        >
        </Home> }
        { <Home
    titulo="Mi título"
    texto="Pasamos props como atributos "
    >
</Home> }
      </header>
    </div>
  );
}
export default App;
*/

