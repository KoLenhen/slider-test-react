import React, { useState, useCallback, useRef } from 'react';
import './Gallery.css';
import pictureFirst from '../../images/picture-first.png';
import pictureSecond from '../../images/picture-second.png';
import pictureThird from '../../images/picture-third.png';


function Gallery() {
    const [value, setValue] = useState(0);
    const ref = useRef(null);

    function handleInput(event) {
        event.preventDefault();
        setValue(event.target.value);
    }

    const setRef = useCallback((node) => {
        if (node) {
            const total = node.scrollWidth - node.offsetWidth;
            const percentage = total * (value / 100);
            node.scrollLeft = percentage;
        }
        ref.current = node;
    }, [value])


    return (
        <section  id="gallery"  className="gallery">
            <div ref={setRef} className="gallery__wrap">
                <ul className="gallery__container">
                    <li className="gallery__item gallery__item_first">
                        <h3 className="gallery__title">Звенья патогенеза СД2</h3>
                        <img className="gallery__picture" src={pictureFirst} alt=""/>
                    </li>
                    <li className="gallery__item gallery__item_second">
                    <h3 className="gallery__title">Смертельный октет</h3>
                        <img className="gallery__picture" src={pictureSecond} alt=""/>
                    </li>
                    <li className="gallery__item gallery__item_third">
                    <h3 className="gallery__title">Звенья патогенеза СД2</h3>
                        <img className="gallery__picture" src={pictureThird} alt=""/>
                    </li>
                </ul>
            </div>
            <form className="gallery__slider">
                <input type="range" onInput={handleInput} className="gallery__range" />
                <label className="gallery__label" htmlFor=""><span>1998</span> <span>2009</span> <span>2016</span></label>
            </form>
        </section>
    );
}

export default Gallery;