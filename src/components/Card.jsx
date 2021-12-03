import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.svg";
import developer from '../assets/developer.png'
import web from '../assets/web.png'



export default function Card() {
  return(
    <div className="mt-2">
      <h1>Cards screen</h1>
      <div class="card-group">
        <div class="card text-white bg-dark border border-white">
          <img class="card-img-top" src={logo} alt="Card image cap" />
          <div class="card-body border border-white">
            <h5 class="card-title">Tecnologias</h5>
            <ul>
              <li>React js</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>PostgreSQL</li>
              <li>Node JS</li>
              <li>C#</li>
            </ul>
          </div>
        <div class="card-footer border border-white">
          <small class="text-white">Last updated 1 mins ago</small>
        </div>
      </div>
    <div class="card text-white bg-dark border border-white">
      <img class="card-img-top" src={logo} alt="Card image cap" />
      <div class="card-body border border-white">
        <h5 class="card-title">Empleos</h5>
        <ul>
          <li>Coopebombas</li>
        </ul>
      </div>
      <div class="card-footer">
        <small class="text-white">Last updated 3 mins ago</small>
      </div>
    </div>
    <div class="card text-white bg-dark border-white">
      <img class="card-img-top" src={logo} alt="Card image cap" />
      <div class="card-body border border-white">
        <h5 class="card-title">Cargos</h5>
        <p class="card-text">Yo trabajo como un QA tester encargado de verificar la calidad de las aplicaciones, pero tambien desarrollo y contibuyo en proyectos</p>
      </div>
      <div class="card-footer border border-white">
        <small class="text-white">Last updated 1 mins ago</small>
      </div>
    </div>
  </div>      
  </div>  
  );
}