import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer(){
    return(
        <footer className={styles.footer} id="footer">
            <div className="container">
                <div className={styles.footer__content}>
                    <div className={styles.footer__brand}>
                        <Link href="#" className={styles.footer__logo}>
                            <span className={styles.logo__bracket}>&lt;</span>TuNombre<span className={styles.logo__bracket}>/&gt;</span>
                        </Link>
                        <p className={styles.footer__text}>
                            Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto!
                        </p>
                    </div>
                    
                    <div className={styles.footer__social}>
                        <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className={styles["footer__social-link"]} aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className={styles["footer__social-link"]} aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="mailto:tu@email.com" className={styles["footer__social-link"]} aria-label="Email">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>
                
                <div className={styles.footer__bottom}>
                    <p className={styles.footer__copyright}>
                        &copy; 2026 Tu Nombre. Todos los derechos reservados.
                    </p>
                    <p className={styles.footer__made}>
                        Hecho con <i className="fa-solid fa-heart"></i> y mucho <i className="fa-solid fa-coffee"></i>
                    </p>
                </div>
            </div>
        </footer>
    );
}