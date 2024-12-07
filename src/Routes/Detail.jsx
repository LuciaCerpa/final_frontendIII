import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [ dentist, setDentist ] = useState({});
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();

  const url = "https://"+params.id;

  useEffect(() => {
      axios(url).then(res => {
        console.log(res.data);
        setDentist(res.data);
      })
  })

  return (
    <>
      <h1>Detail Dentist id </h1>
      <img src="" alt="" />
      <p>name</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail