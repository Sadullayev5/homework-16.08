import React from 'react'
import cardImage from '../../images/card-img.png'
import './SingleProduct.css'
import { useTranslation } from 'react-i18next'

const SingleProduct = () => {

    const [t] = useTranslation()

  return (
    <div className="container">
        <img className='singlepage-img' src={cardImage} alt="" />
        <h2 className='singlepage-h1'>{t('singlepageh1')}</h2>
        <p className='singlepage-text'>{t('singlepaget1')}</p>
        <p className='singlepage-text'>{t('singlepaget2')}</p>
        <p className='singlepage-text'>{t('singlepaget2')}</p>
        <h2 className='singlepage-h2'>{t('singlepageh2')}</h2>
        <p className='singlepage-text'>{t('singlepaget1')}</p>
        <p className='singlepage-text'>{t('singlepaget2')}</p>
        <p className='singlepage-text'>{t('singlepaget2')}</p>
        <h2 className='singlepage-h3'>{t('singlepageh3')}</h2>
        <p className='singlepage-text'>{t('singlepaget1')}</p>
        <p className='singlepage-text'>{t('singlepaget2')}</p>
        <p className='singlepage-text'>{t('singlepaget2')}</p>
    </div>
  )
}

export default SingleProduct