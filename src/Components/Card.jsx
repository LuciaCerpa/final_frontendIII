import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({ fav }) => {

  const [dentistas, setDentistas] = useState([]);
  const [dentista, setDentista] = useState({});
  //const { setFavs } = useContextGlobal();
  const { dispatch, state: {favs} } = useContextGlobal();
  const findFav = favs.find(fav => fav.id === Card.id)
  const addFav = ()=>{
    //setFavs(prevState  => [...prevState, fa]);
    dispatch({ type:  findFav ? "DELETE_FAV" :  "ADD_FAV", payload: fav})
    //localStorage.setItem(`Fav${id}`, fav);

  }

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button onClick={addFav} className="favButton">{findFav ? "estrella " : "estrella rallito "}</button>

    </div>
  );
};

export default Card;
