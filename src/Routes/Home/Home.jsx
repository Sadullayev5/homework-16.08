import { BsMedium } from "react-icons/bs"; 
import { FaLinkedin } from "react-icons/fa"; 
import { BsTwitter } from "react-icons/bs"; 
import React from 'react'
import { useTranslation } from 'react-i18next'
import './Home.css'
import { Link } from 'react-router-dom';
import heroImage from '../../images/hero-img.png'
import cardImage from '../../images/card-img.png'


const Home = () => {

    const [t] = useTranslation()

  return (
    <div className="container">
        <div className="Hero">
            <div className="hero-content">
                <h2>{t('herotitle')}</h2>
                <h3>{t('herotitle2')}</h3>
                <p>{t('herotext')}</p>
                <div className="hero-links">
                    <Link className="twitter"><BsTwitter />Twitter</Link>
                    <Link className="linkedin"><FaLinkedin />Linkedin</Link>
                    <Link className="medium"><BsMedium />Medium</Link>
                </div>
            </div>
            <div className="hero-img">
                <img src={heroImage} alt="" />
            </div>
        </div>
        <div className="products">
            <ul className="products-list">
                    <li><Link className='products-list-item'>{t('productsList1')}</Link></li>
                    <li><Link className='products-list-item'>{t('productsList2')}</Link></li>
                    <li><Link className='products-list-item'>{t('productsList3')}</Link></li>
                    <li><Link className='products-list-item'>{t('productsList4')}</Link></li>
                    <li><Link className='products-list-item'>{t('productsList5')}</Link></li>
                    <li><Link className='products-list-item'>{t('productsList6')}</Link></li>
                    <li><Link className='products-list-item'>{t('productsList7')}</Link></li>
            </ul>
            <div className="card-wrapper">
                <div className="card">
                    <img src={cardImage} alt="" />
                    <p className="card-date">{t('carddate')}</p>
                    <h3 className="card-title">{t('cardtitle')}</h3>
                    <p className="card-text">{t('cardtext')}</p>
                    <Link to='/singleproduct' className="card-link">{t('cardlink')}</Link>
                </div>
                <div className="card">
                    <img src={cardImage} alt="" />
                    <p className="card-date">{t('carddate')}</p>
                    <h3 className="card-title">{t('cardtitle')}</h3>
                    <p className="card-text">{t('cardtext')}</p>
                    <Link to='/singleproduct' className="card-link">{t('cardlink')}</Link>
                </div>
                <div className="card">
                    <img src={cardImage} alt="" />
                    <p className="card-date">{t('carddate')}</p>
                    <h3 className="card-title">{t('cardtitle')}</h3>
                    <p className="card-text">{t('cardtext')}</p>
                    <Link to='/singleproduct' className="card-link">{t('cardlink')}</Link>
                </div>
                <div className="card">
                    <img src={cardImage} alt="" />
                    <p className="card-date">{t('carddate')}</p>
                    <h3 className="card-title">{t('cardtitle')}</h3>
                    <p className="card-text">{t('cardtext')}</p>
                    <Link to='/singleproduct' className="card-link">{t('cardlink')}</Link>
                </div>
                <div className="card">
                    <img src={cardImage} alt="" />
                    <p className="card-date">{t('carddate')}</p>
                    <h3 className="card-title">{t('cardtitle')}</h3>
                    <p className="card-text">{t('cardtext')}</p>
                    <Link to='/singleproduct' className="card-link">{t('cardlink')}</Link>
                </div>
                <div className="card">
                    <img src={cardImage} alt="" />
                    <p className="card-date">{t('carddate')}</p>
                    <h3 className="card-title">{t('cardtitle')}</h3>
                    <p className="card-text">{t('cardtext')}</p>
                    <Link to='/singleproduct' className="card-link">{t('cardlink')}</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home