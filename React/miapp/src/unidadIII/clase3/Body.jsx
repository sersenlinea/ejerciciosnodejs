import React from 'react'

const Body = () => {
    return (
        <div>
             <h1>Nuestra aplicación con Context de React</h1>
            <p>El valor actual del contexto es determinado por la propiedad 
                value del ascendentemente más cercano en el árbol al componente 
                que hace la llamada.</p>
            <p> Esto nos permite encapsular datos e inyectarlos en componentes 
                incluídos dentro de dicho contexto.</p>
        </div>
    )
}

export default Body