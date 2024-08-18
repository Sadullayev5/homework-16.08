import React from 'react'
import Logo from '../images/logo.svg'
import SecondLogo from '../images/logo2.svg'
import { Link } from 'react-router-dom'
import './Nav.css'
import { useTranslation } from 'react-i18next';

const Nav = () => {

    const [t , i18n] = useTranslation();

    const ChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value)
    }

  return (
    <div className="container">
        <nav>
            <div className="nav-img">
                <img src={Logo} alt="" />
                <img src={SecondLogo} alt="" />
            </div>
            <div className="nav-items">
                <select defaultValue={i18n.language} onChange={ChangeLanguage}>
                    <option value="uz">Uz</option>
                    <option value="ru">Ru</option>
                    <option value="en">En</option>
                </select>
                <ul className='nav-list'>
                    <li><Link className='list-item' >{t('navt1')}</Link></li>
                    <li><Link className='list-item'>{t('navt2')}</Link></li>
                    <li><Link className='list-item'>{t('navt3')}</Link></li>
                    <li><Link className='list-item'>{t('navt4')}</Link></li>
                    <li><Link className='list-item'>{t('navt5')}</Link></li>
                    <li><Link className='list-item'>{t('navt6')}</Link></li>
                    <li><Link className='list-item'>{t('navt7')}</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Nav