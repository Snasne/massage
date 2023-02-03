import React, { useState } from 'react';
import headerStyles from './Header.module.scss';
import { Link } from 'react-router-dom';


export default function Header() {

    const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={headerStyles.wrapper}>
        <div className={headerStyles.logo}>
            <div className={headerStyles.iconHeard}>

            </div>
            <p>Клиника <br/> жизни</p>
        </div>
        <div className={headerStyles.navbar}>
            <div className={headerStyles.mobileInfo}>
                <div className={headerStyles.mobileIcon}>

                </div>
                <p className={headerStyles.defaultNumber}>+7 (987) 602 37 05</p>
            </div>
            <div className={headerStyles.socialButtons}>
                <Link to='/'>
                    <div className={headerStyles.instagramIcon}>

                    </div>
                </Link>
                <Link to='/'>
                    <div className={headerStyles.whatsappIcon}>

                    </div>
                </Link>
                <Link to='/'>
                    <div className={headerStyles.telegramIcon}>

                    </div>
                </Link>
            </div>
        </div>

        <div className={headerStyles.anotherNavbar}>
            <button className={headerStyles.buttonOpenAdaptiveNavbar} onClick={() => setIsOpened(true)} style={{display: isOpened ? 'none' : 'flex'}}>
                <div className={headerStyles.buttonOpenAdaptiveNavbar__containerForSpans}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div className={headerStyles.adaptiveNavbar} style={{display: isOpened ? 'flex' : 'none'}}>
                <div className={headerStyles.adaptiveNavbar__upperInfo}>
                    <div className={headerStyles.bodyAdaptiveNavbar}>
                        <div className={headerStyles.containerAdaptiveNavbar}>
                            <div className={headerStyles.containerAdaptiveNavbar__logo}>
                                <div className={headerStyles.containerAdaptiveNavbar__iconHeard}>
                                
                                </div>
                                <p className={headerStyles.containerAdaptiveNavbar__logoText}>Клиника <br/> жизни</p>
                            </div>
                        </div>
                        <button className={headerStyles.buttonEscape} onClick={() => setIsOpened(false)}>
                            <span className={headerStyles.buttonEscape__leftCross}></span>
                            <span className={headerStyles.buttonEscape__rightCross}></span>
                        </button>
                    </div>
                </div>
                <div className={headerStyles.adaptiveNavbar__bottomInfo}>
                    <div className={headerStyles.adaptiveNavbar__instagramIcon}>
                    
                    </div>
                    <div className={headerStyles.adaptiveNavbar__whatsappIcon}>
                    
                    </div>
                    <div className={headerStyles.adaptiveNavbar__telegramIcon}>
                    
                    </div>
                </div>
                <p className={headerStyles.adaptiveNavbar__mobileInfo}>+7 (987) 602 37 05</p>
            </div>
        </div>
    </div>
  )
}
