import React, { useState, useEffect } from 'react';
import './Base.css';
import background from '../../images/second-bg.jpg';

function Base() {

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
    <section id="base" className="base" >
      <img className="base__background" src={background} alt="" />
      <div className="base__content" style={{
        transform: `translateY(${offset * -0.5}px)`
      }} >
        <h2 className="base__title">Основа терапии &#8212; патогенез СД2</h2>
       
      </div>
       </section>
  );
}

export default Base;