import React from 'react';
import { useState } from 'react';
import modalWindowStyles from './ModalWindow.module.scss';
import windowSuccessStyles from './WindowSuccess.module.scss'

export default function ModalWindow(props) {

    /* Привязка рефов к инпутам */
    let userNameRef = React.createRef('null');
    let userPhoneRef = React.createRef('null');

    /* Состояния куда записывается информация с модального окна при сабмите*/
    const [userName, setUserName] = useState(null);
    const [userPhone, setUserPhone] = useState(null);

    /* Проверка на изменено ли модальное окно */
    const [isSuccess, setIsSuccess] = useState(false);

    /* Длина лоадера */
    const [loaderProgress, setLoaderProgress] = useState(0);

    /* Функция которая закрывает модальные окна,
       если нажать мимо модального окна. */
    const changeModalOnSuccesModal = () => {
        props.setIsOpenModalWindow(false);
        setIsSuccess(false);
    };

    /* Функция которая показывает клиенту, что данные отправлены,
       модальное окно закрывается через 5 секунд, и данные клиента записываются в 
       хранилище данных */
    const sendUserData = () => {
        props.setUserNameData(userName);
        props.setUserPhoneData(userPhone);
        setIsSuccess(true);
        setLoaderProgress(0);
        setTimeout(() => {
            setLoaderProgress(33);
        }, 1000);
        setTimeout(() => {
            setLoaderProgress(67);
        }, 2000);
        setTimeout(() => {
            setLoaderProgress(100);
        }, 3000);
        setTimeout(() => {
            changeModalOnSuccesModal();
        }, 5000);
    }



  return (
    isSuccess ?
    <>
        <div 
            className={windowSuccessStyles.wrapperBackground}  
            style={{display: props.isOpenModalWindow ? 'flex' : 'none'}} 
            onClick={() => changeModalOnSuccesModal()}
        >

        </div>
        <div 
            className={windowSuccessStyles.wrapper}
            style={{display: isSuccess ? 'flex' : 'none'}}
        >
            <div className={windowSuccessStyles.container}>
                <p>Отправлено!</p>
                <div className={windowSuccessStyles.loader}>
                    <div 
                        className={windowSuccessStyles.slider} 
                        style={{width: loaderProgress + '%'}}
                    >
                    
                    </div>
                </div>
            </div>
        </div>
    </>
    :
    <>
        <div 
            className={modalWindowStyles.wrapper} 
            style={{display: props.isOpenModalWindow ? 'flex' : 'none'}} 
            onClick={() => props.setIsOpenModalWindow(false)}
        >

        </div>
        <form 
            className={modalWindowStyles.container} 
            onSubmit={(event) => event.preventDefault()} 
            style={{display: props.isOpenModalWindow ? 'flex' : 'none'}}
        >
            <div className={modalWindowStyles.body}>
                <p>Запись</p>
                <input 
                    type="text" 
                    placeholder='Имя:'
                    ref={userNameRef}
                    onChange={() => setUserName(userNameRef.current.value)}
                />
                <input 
                    type="tel" 
                    placeholder='Номер:' 
                    maxLength="12"
                    ref={userPhoneRef} 
                    onChange={() => setUserPhone(userPhoneRef.current.value)}
                />
            </div>
            <button onClick={() => sendUserData()}>Отправить</button>
        </form>
    </>
  )
}
