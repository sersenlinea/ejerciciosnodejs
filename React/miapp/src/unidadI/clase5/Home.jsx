import logo from '../../logo.svg';

function Home() {
    let nombre = "Juan"
    let clientes = ["Pedro", "Pablo", "Lucía", "Teresa"]
    let personal = [{
        nombre: "Luis",
        apellido: "Alvarez",
        edad: 24,
        direccion: {
            calle: "Paraguay",
            altura: 908,
            telefono: 1170399085
        }
    }]
    return (<div className="principal"
        style={{ backgroundColor: "lightblue",padding:'50px' }}>
        <div style={{ backgroundColor: "black", width: '150px' }}>
            <img src={logo} width={'150px'} />
        </div>
        <p>Nombre:{nombre}</p>
        <h2>Clientes</h2>
        <ul>
            {clientes.map((c, i) => <li key={i + 'client'}>{c}</li>)}
        </ul>
        <h2>Personal</h2>
        <ul>
            {personal.map((p, index) => {
                return <li key={index + 'personal'}>
                    <p><strong>Nombre:</strong> {p.nombre}</p>
                    <p><strong>Apellido:</strong>{p.apellido}</p>
                    <p><strong>Edad:</strong>{p.edad}</p>
                    <p><strong>Dirección:</strong>
                        calle: {p.direccion.calle}</p>
                    <p><strong>Altura:</strong> {p.direccion.altura}</p>
                    <p><strong>teléfono:</strong>
                        {p.direccion.telefono}</p>
                </li>
            })
            }
        </ul>
    </div>
    );
}
export default Home;