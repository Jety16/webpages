import React from 'react';
import './Banner.css';


const Banner = () => {
  return (
    <div className="magCover">
      <div className="lateralBar">

      </div>
      <div className="magImage">
        <img
          src='./fondo4.jpeg'
          alt=""
          width="1920"
        />
        <div className="colorOverlay"></div>
      </div>
      
      <div className="magHead">

    
        <div className="magHeadline">
          
          <div className="sm_initial" >J</div>
          <div className="magSub">
          <p>
            <br />  <b>10 - LOV </b>  </p>
          
        </div>
          <div className="up">
            <div className="sm">
              <a href="/">UÆN</a>
            </div>
            <div className="sub">Creative Director</div>
          </div>
          <div></div>
        </div>
      </div>
      <p className="magCaption">
        - Como hacer el amor escuchando a García, escribí sobre la libertad en épocas donde la monotonía no se esconde. Siento un aire contaminante, la alborada en el cielo, un tango, los vinos con tu abuelo; son esos detalles que nos hacen creer en lo eterno.
<br />
      <strong>_juaem</strong>
      </p>
    </div>
  );
};

export default Banner;
