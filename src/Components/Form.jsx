import React, { useState } from "react";


const Form = () => {
  const [form, setForm] = useState({nombre: "", email:"", mensaje: ""});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hola");
  }

  return (
    <div>
      <form action={handleSubmit}>
        <label htmlFor="nombre">Nombre completo: </label>
        <input type="text" placeholder="Ejemplo: Roberto Perez Valenzuela" />
        <label htmlFor="email">Email</label>
        <input type="emal" placeholder="ejemplo@mail.com" />
        <label htmlFor="mensaje">Mensaje ( Opcional )</label>
        <textarea name="mensaje" placeholder="Ingrese mensaje adicional si lo desea" onResize={false}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
