import React, { useState, useEffect } from 'react';
import './Aim.css';
import background from '../../images/first-bg.jpg';

function Aim(props) {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);
  return (
    <section id="aim" className="aim" >
      <img className="aim__background" src={background} alt="" />
      <div className="aim__content" style={{
        transform: `translateY(${offset * -0.5}px)`
      }} >
        <h2 className="aim__title">Всегда ли цели терапии СД2 на&nbsp;поверхности?</h2>
        <div className="aim__wrapper aim__wrapper_hypoglycemia">
          <p className="aim__text aim__text_hypoglycemia">Гипогликемия</p>
          <span className="aim__circle aim__circle_hypoglycemia"></span>
        </div>
        <div className="aim__wrapper aim__wrapper_HbA1c">
          <p className="aim__text aim__text_HbA1c">Цель по HbA1c</p>
          <span className="aim__circle aim__circle_HbA1c"></span>
        </div>
        <div className="aim__wrapper aim__wrapper_cd">
          <p className="aim__text aim__text_cd">Осложнения СД</p>
          <span className="aim__circle aim__circle_cd"></span>
        </div>
        <div className="aim__wrapper aim__wrapper_risks">
          <p className="aim__text aim__text_risks">СС риски</p>
          <span className="aim__circle aim__circle_risks"></span>
        </div>
      </div>

<a className="aim__arrow" href="#base"><span>Листайте вниз</span>&#9586;&#9585;</a>
    </section>
  );
}

export default Aim;