const Favorite=({favorite,addFavorite})=>{
    return(
        <div>
            <h2>React</h2>
            <img src="logo192.png" alt="logo"/>
            {favorite?
        <button onClick={addFavorite}>Agregar</button>  :
        <button onClick={addFavorite}>Remover</button>    
        }
        </div>
    )
}
export default Favorite;