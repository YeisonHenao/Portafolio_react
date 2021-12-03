import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import landscape from "../assets/landscape.jpg";
import Card from "./Card";


export default function Hero() {

  const height = '20%'
  const width = '100%'

  return(
    <div className="text-light">
      <img style={{height:height,width:width, alignContent:'center' , alignItems:'center' }} src={landscape} alt="..." />
      <div className="container">
        <h1 className="mt-2">Hero section</h1>
        <hr />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum dolor esse neque, quo ut expedita natus, in recusandae numquam ex libero unde ad. Officiis numquam eum quidem odio molestias.</p>
        <section>
          <Card />
        </section>
      </div>
    </div>
  );
}