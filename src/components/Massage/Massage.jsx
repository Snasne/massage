import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainInfo from '../MainInfo/MainInfo';
import ModalWindow from '../ModalWindow/ModalWindow';
import Services from '../Services/Services';

export default function Massage() {
    const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
    const [userNameData, setUserNameData] = useState(null);
    const [userPhoneData, setUserPhoneData] = useState(null);
  
    /* Проверка пришли ли данные с модальных окон, после сабмита */
    useEffect(() => {
      console.log('Имя: ' + userNameData, 'Телефон: ' + userPhoneData);
    }, [userNameData, userPhoneData])
  
    return (
      <div className='app'>
        <ModalWindow 
          isOpenModalWindow={isOpenModalWindow} 
          setIsOpenModalWindow={setIsOpenModalWindow}
          setUserNameData={setUserNameData}
          setUserPhoneData={setUserPhoneData}
        />
        <Header/>
        <MainInfo 
          setIsOpenModalWindow={setIsOpenModalWindow}
        />
        <Services/>
        <Footer/>
      </div>
    );
}
