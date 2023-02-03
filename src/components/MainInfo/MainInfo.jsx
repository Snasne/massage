import React from 'react';
import mainInfoStyles from './MainInfo.module.scss'

export default function MainInfo(props) {
  return (
    <div className={mainInfoStyles.wrapper}>
        <div className={mainInfoStyles.leftInfo}>
        
        </div>
        <div className={mainInfoStyles.rightText}>
            <h1>Лечебный массаж</h1>
            <div className={mainInfoStyles.rightText__middleText}>
              <div className={mainInfoStyles.middleText__upText}>
                <h3>Индивидуальный подход</h3>
              </div>
              <div className={mainInfoStyles.middleText__bottomText}>
                <h3>для</h3><h3 className={mainInfoStyles.bottomText__violetText}>каждого</h3><h3>клиента</h3>
              </div>
            </div>
            <button onClick={() => props.setIsOpenModalWindow(true)}>Записаться на прием</button>
        </div>
    </div>
  )
}
