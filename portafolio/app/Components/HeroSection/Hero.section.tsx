import React from 'react';
import styles from './Hero.section.module.css';
import Link from 'next/link';

export default function HeroSection(){
    return(
        <>
            <section className={styles.heroSection} id="home">
                <div className={'container' + ' ' + styles.hero__container}>
                    
                    <div className={styles.hero__content}>
                        <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>
                        
                        <h1 className={styles.hero__title}>
                            Arturo Tadeo Moreno Vigueras
                        </h1>
                        
                        <h2 className={styles.hero__subtitle}>
                            <span className={styles.highlight}>
                                Analista de datos
                            </span> en Crecimiento
                        </h2>
                        
                        <p className={styles.hero__description}>
                            Actualmente estoy cursando la carrera de Matemáticas Aplicadas y Computación en la FES Acatlán,
                            en donde estoy aprendiendo habilidades en estadística, finanzas, bases de datos
                            y programación.
                        </p>   
                        
                        <div className={styles.hero__buttons}>
                            <Link href="#projects" className={styles.btn + ' ' + styles['btn--outline']}>
                                <i className="fas fa-rocket"></i> Ver mis proyectos
                            </Link>
                            
                            <Link href="#contact" className={styles.btn + ' ' + styles['btn--outline']}>
                                <i className="fas fa-envelope"></i> Contáctame
                            </Link>
                        </div>
                    </div>
                    
                    <div className={styles.hero__image}>
                        <div className={styles.hero__blob}>
                            <div className={styles.hero__avatar}>
                                <i className="fas fa-user-astronaut"></i>
                            </div>
                        </div>
                        
                        <div className={styles['hero__decoration'] + ' ' + styles['hero__decoration--1']}></div>
                        <div className={styles['hero__decoration'] + ' ' + styles['hero__decoration--2']}></div>
                        <div className={styles['hero__decoration'] + ' ' + styles['hero__decoration--3']}></div>
                    </div>
                </div>
                
                <div className={styles.hero__scroll}>
                    <Link href="#interests" className={styles.hero__scrollLink}>
                        <span>Scroll</span>
                        <i className="fas fa-chevron-down"></i>
                    </Link>
                </div>
            </section>
        </>
    );
}