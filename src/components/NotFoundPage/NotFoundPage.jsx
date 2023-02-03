import React from 'react';
import { Link } from 'react-router-dom';
import notFoundPageStyles from './NotFoundPage.module.scss'

export default function NotFoundPage() {
  return (
    <div className={notFoundPageStyles.wrapper}>
        <div className={notFoundPageStyles.container}>

        </div>
        <Link to='/'>
          <button>Назад</button>
        </Link>
    </div>
  )
}
