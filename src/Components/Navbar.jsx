import {Link} from "react-router";
import { useContextGlobal } from "./utils/global.context";

const Navbar = () => {

  const {dispatch, state: {theme}} = useContextGlobal();

  const chageTheme = ()=>{
    dispatch({ type:  "TOGGLE_THEME", payload: theme ? "" : "dark"})
  }
  return (
    <nav>
      <img src="/images/DH.png" alt="digital house" height={25} />
      <div className="linksGroup">
        <div>
          <Link to="/">Home</Link>
          <Link to="/favs">Favs</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <button className="themeBtn" onClick={chageTheme}>
          <img src={`/images/${theme ? "day" : "night"}.png`} height={25}/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar