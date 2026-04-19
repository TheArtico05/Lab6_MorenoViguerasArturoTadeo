import React from 'react';
import styles from './Contact.module.css';

export default function Contact(){
    return(
        <section className={styles.contact} id="contact">
            <div className="container">
                <div className={styles.contact__content}>
                    
                    {/* LEFT */}
                    <div className={styles.contact__info}>
                        <span className="section__subtitle">¿Tienes un proyecto?</span>
                        <h2 className="section__title">¡Hablemos!</h2>

                        <p className={styles.contact__description}>
                            Estoy disponible para oportunidades laborales, proyectos freelance 
                            o simplemente para conectar. ¡No dudes en contactarme!
                        </p>

                        <div className={styles.contact__data}>

                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <span className={styles.contact__label}>Email</span>
                                    <a href="mailto:tu@email.com" className={styles.contact__value}>
                                        tu@email.com
                                    </a>
                                </div>
                            </div>

                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <span className={styles.contact__label}>Ubicación</span>
                                    <span className={styles.contact__value}>Ciudad, País</span>
                                </div>
                            </div>

                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <div>
                                    <span className={styles.contact__label}>Disponibilidad</span>
                                    <span className={styles.contact__available}>
                                        Disponible para trabajar
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className={styles.contact__cta}>
                        <div className={styles.contact__card}>
                            <h3 className={styles.contact__cardTitle}>
                                ¿Listo para comenzar?
                            </h3>
                            <p className={styles.contact__cardText}>
                                Envíame un mensaje y te responderé lo antes posible.
                            </p>

                            <a href="mailto:tu@email.com" className="btn btn--primary btn--large btn--full">
                                <i className="fas fa-paper-plane"></i> Enviar mensaje
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}