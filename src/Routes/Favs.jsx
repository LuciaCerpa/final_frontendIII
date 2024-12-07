import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state: {favs} } = useContextGlobal();

  return (
    <main className="animate__animated animate__jackInTheBox">
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {favs.length > 0 ? favs.map((fav) => (
          <Card key={fav.id} dentist={fav}/>
          )) : <h3>Click en la estrella de la tarjeta del dentista para agregarlos a esta seccion</h3>}
      </div>
    </main>
  );
};

export default Favs;
