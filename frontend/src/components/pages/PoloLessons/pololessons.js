import React from 'react';
import Footer from '../../ Footer/footer';
import Container from './container1';
import Container2 from './container2';
import Container3 from './container3';
import style from './styles.module.scss';

function PoloLessons () {
    return(
           <div  className={style.fondo}>
                    <div className={style.contenedor1}>
                        <div className={style.fila}>
                          <Container/>
                             <Container2 />
                             </div>
                         <Container3 />
                         <Footer />
                    </div>
                    <span className={style.backgroundtriangle}></span>
               </div>
    )
}

export default PoloLessons;