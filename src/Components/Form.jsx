import React, { useState } from "react";


const Form = () => {
  const [mensajeExito , setMensajeExito] = useState();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setMensajeExito(`**Gracias ${formData.nombre}, te contactaremos cuando antes vía mail**`);
    console.log("Formulario enviado:", formData);
  }

  const validateForm = () => {
    const errors = {};
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{5,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validar nombre
    const trimmedNombre = formData.nombre.trim();
    if (!trimmedNombre) {
      errors.nombre = "El nombre es requerido.";
    } else if (trimmedNombre.length < 5) {
      errors.nombre = "El nombre debe tener al menos 5 caracteres.";
    } else if (/\s{2,}/.test(trimmedNombre)) {
      errors.nombre = "El nombre no puede contener más de dos espacios seguidos.";
    } else if (!nombreRegex.test(trimmedNombre)) {
      errors.nombre =
        "El nombre solo puede contener letras, acentos, y espacios (mínimo 5 caracteres).";
    }

    // Validar email
    if (!formData.email) {
      errors.email = "El correo electrónico es requerido.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "El correo electrónico no es válido.";
    }

    return errors;
  }

  return (
    <div className="form">
      {mensajeExito ? <h3 class="animate__animated animate__lightSpeedInLeft">{mensajeExito}</h3> :
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre completo: </label>
        <input type="text" name="nombre" placeholder="Ejemplo: Roberto Perez Valenzuela" value={formData.nombre} onChange={handleChange} />
        {errors.nombre && <p>{errors.nombre}</p>}
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="ejemplo@mail.com"  value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="mensaje">Mensaje ( Opcional )</label>
        <textarea name="mensaje" placeholder="Ingrese mensaje adicional si lo desea" value={formData.mensaje} onChange={handleChange}></textarea>
        <button type="submit">Enviar</button>
      </form>
      }
    </div>
  );
};

export default Form;
