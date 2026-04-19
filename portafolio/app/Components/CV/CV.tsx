import React from 'react';
import styles from './CV.module.css';
import Link from 'next/link';

export default function CV(){
    return(
        <section className={styles.cv} id="cv">
            <div className="container">
                <div className={styles.cv__content}>
                    <div className={styles.cv__info}>
                        <span className={styles.section__subtitle}>Conoce mi trayectoria</span>
                        <h2 className={styles.section__title}>Mi Currículum</h2>
                        <p className={styles.cv__description}>
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className={styles.cv__buttons}>
                            <Link 
                                href="https://www.overleaf.com/gallery/tagged/cv" 
                                className="btn btn--primary btn--large"
                            >
                                <i className="fas fa-download"></i> Descargar CV
                            </Link>

                            <Link href="#" className="btn btn--secondary btn--large">
                                <i className="fas fa-eye"></i> Ver CV Digital
                            </Link>
                        </div>
                    </div>
                    
                    <div className={styles.cv__social}>
                        <h3 className={styles.cv__socialTitle}>Conectemos</h3>
                        <div className={styles.cv__socialLinks}>
                            
                            <Link href="https://linkedin.com/in/tu-perfil" className={styles.social__card}>
                                <div className={styles.social__icon}>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>LinkedIn</span>
                                    <span className={styles.social__user}>{"@tu-perfil"}</span>
                                </div>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            
                            <Link href="https://github.com/tu-usuario" className={styles.social__card}>
                                <div className={styles.social__icon}>
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>GitHub</span>
                                    <span className={styles.social__user}>{"@tu-usuario"}</span>
                                </div>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            
                            <Link href="mailto:tu@email.com" className={styles.social__card}>
                                <div className={styles.social__icon}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>Email</span>
                                    <span className={styles.social__user}>{"tu@email.com"}</span>
                                </div>
                                <i className="fas fa-arrow-right"></i>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}