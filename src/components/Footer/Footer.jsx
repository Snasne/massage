import React from 'react';
import footerStyles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={footerStyles.wrapper}>
        <div className={footerStyles.dignitiesMassage}>
            <p>Плюсы массажа</p>
            <div className={footerStyles.dignities}>
                <p>- массаж способствует повышению иммунитета</p>
                <p>- массаж минимизирует хронические болезни</p>
                <p>- массаж успокаивает мышцы после тренировки</p>
                <p>- массаж устраняет головные боли</p>
            </div>
        </div>
        <div className={footerStyles.doctorsImage}>
        
        </div>
    </div>
  )
}
