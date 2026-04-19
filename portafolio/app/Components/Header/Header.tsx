import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

let HeaderData:String='arturo Tadeo Moreno Vigueras'

export default function Header(){
    return(
        <>     <header className={styles.header} id="header">
        <nav className={'container' + ' ' + styles.nav}>
            <Link href="#home" className={styles.nav__logo}>
                <span className={styles.logo__bracket}>&lt;</span>Arturo Tadeo Moreno Vigueras<span className={styles.logo__bracket}>/&gt;</span>
            </Link>
            
            <input type="checkbox" id="nav-toggle" className={styles.nav__checkbox} />
            <label htmlFor="nav-toggle" className={styles.nav__toggle}>
                <i className="fas fa-bars"></i>
            </label>
            
            <div className={styles.nav__menu} id="nav-menu">
                <label htmlFor="nav-toggle" className={styles.nav__close}>
                    <i className="fas fa-times"></i>
                </label>
                
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <label htmlFor="nav-toggle">
                            <a href="#home" className={styles.nav__link}>Inicio</a>
                        </label>
                    </li>
                    <li className={styles.nav__item}>
                        <label htmlFor="nav-toggle">
                            <a href="#interests" className={styles.nav__link}>Intereses</a>
                        </label>
                    </li>
                    <li className={styles.nav__item}>
                        <label htmlFor="nav-toggle">
                            <a href="#cv" className={styles.nav__link}>CV</a>
                        </label>
                    </li>
                    <li className={styles.nav__item}>
                        <label htmlFor="nav-toggle">
                            <a href="#projects" className={styles.nav__link}>Proyectos</a>
                        </label>
                    </li>
                    <li className={styles.nav__item}>
                        <label htmlFor="nav-toggle">
                            <a href="#contact" className={styles.nav__link}>Contacto</a>
                        </label>
                    </li>
                </ul>
            </div>
        </nav>
    </header></>
    );
}
