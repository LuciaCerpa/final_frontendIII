import {Link} from "react-router";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">Home</Link>
      <Link to="/favs">Favs</Link>
      <Link to="/contacto">Contacto</Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar