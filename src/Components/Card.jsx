import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import Tooltip from "./ToolTip"

const Card = ({ dentist }) => {
  const { dispatch, state: {favs} } = useContextGlobal();
  const findFav = favs.find(fav => fav.id === dentist.id)
  const addFav = ()=>{
    dispatch({ type:  findFav ? "DELETE_FAV" :  "ADD_FAV", payload: dentist})
  }

  return (
    <div className="card"> 
      <Tooltip text="Doctor Details">
        <Link to={`/detail/${dentist.id}`}>
          <img src="../public/images/doctor.jpg" alt={dentist.username} height={200} width={200}/>
          <h5>{dentist.username + dentist.id}</h5>
        </Link>
      </Tooltip>  
      <Tooltip text={findFav ? "Remove from favorites" : "Add to favorites"}>
        <button onClick={addFav} className="favButton"><img src={`../../public/images/${findFav ? "star" : "darkStar"}.png`} height={25}/></button>
      </Tooltip>
    </div>
  );
};

export default Card;
