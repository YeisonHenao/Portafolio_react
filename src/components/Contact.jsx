import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function Contact(){
  return(
    <div className="container text-light mt-5">
      <h1>Contact screen</h1>
      <form>
        <div class="form-group">
          <label for="lblName">Nombre</label>
          <input type="text" class="form-control" id="txtNombre" placeholder="Ingresa tu nombre" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="lblCorreo">Correo</label>
          <input type="email" class="form-control" id="txtEmail" placeholder="Ingresa tu correo" />
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}