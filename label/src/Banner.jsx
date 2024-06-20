import React, { useState } from 'react';
import './Banner.css';
import Description from './Description';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="magCover">
      <div className="lateralBar"></div>
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
          <div className="sm_initial">J</div>
          <div className="magSub">
            <p>
              <br />  <b>10 - LOV </b>
            </p>
            
          </div>
          <div className="up">
            <div className="sm">
              <a href="/">UAN</a>
            </div>
            <div className="sub">Computer Scientist</div>
          </div>
          <div></div>
        </div>
        <button className="arrowButton" onClick={toggleComponent}>
          ➔
        </button>
      </div>
      <Description isOpen={isOpen} toggleComponent={toggleComponent} />

      <p className="magCaption">
        - No se pongo algo interesante aca como para hacerme el interesante jaja jeje jiji jojo
<br />
      <strong>_juaem</strong>
      </p>
    </div>
  );
};

export default Banner;
