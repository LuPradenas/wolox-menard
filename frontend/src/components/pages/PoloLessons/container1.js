import React from 'react';

import Boton from '../../Boton/boton';

import style from './styles.module.scss';
import linea from './imagen/linea.png';

function Container(ButtonTwo) {
  return (
    <div className={style.content}>
      <h1 className={style.title1}>Polo lessons</h1>
      <img src={linea} alt="linea" className={style.line} />
      <span>take your skill to the next level</span>
      <p className={style.subTitle1}>
        The Oxford Polo School’s fully qualified team offer several options for individuals and groups,
        ensuring that you receive the correct coaching that suits your skill level and ability. Our wide
        variety of horses are suited to all levels, from complete beginners to professionals, so no previous
        riding experience is needed. All necessary equipment is available for lessons and is included within
        the price.
      </p>
      <Boton ButtonTwo={style.buttonThree} />
    </div>
  );
}

export default Container;
