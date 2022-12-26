import React, { useState, useEffect } from 'react';

// const Home =()=> {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `${count} veces`;
//   },[count]);

//   return (
//     <div>
//       <p>Pulsaste sobre el botón {count} veces</p>
//       <button onClick={() => setCount(count + 1)}>
//         Pulsá acá
//       </button>
//     </div>
//   );
// }
// export default Home
const Home=()=>{
  let url="https://randomuser.me/api/"
  const [user,setUser]=useState({});
  let usuario=``
  const getData=()=>{
    fetch(url)
    .then(data=>{
      return data.json()
    })
    .then(data=>setUser(data.results))
    .catch(error=>{console.log(error);})
 
  }
  // useEffect(()=>{getData()},[])
  
  if(user.length!==0){
   let usu =user[0]
   console.log(usu);
  //  usuario =`
  //  <li> ${usu.name.title} ${usu.name.first} ${usu.name.last}  </li>
  //  ` 
  }

  return(
    <div>{usuario}</div>
  )
}
export default Home
