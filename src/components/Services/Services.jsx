import React from 'react';
import servicesStyles from './Services.module.scss'

export default function Services() {
  return (
    <div className={servicesStyles.wrapper}>
        <div className={servicesStyles.header}>
            <div className={servicesStyles.borderTop}>
            
            </div>
            <p>Наши услуги</p>
        </div>
        <div className={servicesStyles.servicesIcons}>
            <div className={servicesStyles.reabilitation}>
            
            </div>
            <div className={servicesStyles.massage}>
        
            </div>
            <div className={servicesStyles.terapy}>
        
            </div>
        </div>
    </div>
  )
}
