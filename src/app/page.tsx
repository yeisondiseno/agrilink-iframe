import React from 'react';
import Image from 'next/image';
// Components
import { Header, Footer, Divider } from '@/components';
// Styles
import './page.scss';

const secondSectionCard = [
  {
    label: 'ALMA Metodo',
    img: '/assets/img/home_1.png',
  },
  {
    label: 'ALMA Online',
    img: '/assets/img/home_2.png',
  },
  {
    label: 'Nutrición',
    img: '/assets/img/home_3.png',
  },
];

export default function Home() {
  return (
    <main className='home'>
      <Header />

      <section
        className='home-first max-block'
        style={{ backgroundImage: `url('/assets/img/home_first.png')` }}
      >
        <div className='home-first-content'>
          <h1>
            ¡ELEVAREMOS TODO TU
            <br />
            <span className='home-first-title-big'>POTENCIAL!</span>
          </h1>
          <h3 className='font-border pink'>CONTIANZA, SEGURIDAD Y SALUD</h3>
        </div>
      </section>

      <section className='home-second max-block'>
        {secondSectionCard.map(({ label, img }) => (
          <aside key={label} className='home-second-card'>
            <Image
              src={img}
              alt={label}
              width={677}
              height={450}
              className='home-second-card-img'
            />
            <p>{label}</p>
          </aside>
        ))}
      </section>

      <section className='home-third '>
        <article className='home-third-container max-block'>
          <div>
            <h2 className='home-third-title'>Nosotros</h2>
            <h3 className='home-third-sub-title'>ESPACIO INTEGRAL</h3>
            <p className='home-third-text'>
              ¡ALMA es para todas las mujeres, no importa tu nivel deportivo o
              condición física, lo importante es tu superación, tu salud y
              enfoque de resto déjalo en nuestras manos para guiarte en lo
              deportivo, nutricional y mucho mas!
            </p>
          </div>
          <div
            className='home-third-right'
            style={{ backgroundImage: 'url("/assets/img/home_fit.png")' }}
          >
            <h3 className='font-border'>ELEVA TU POTENCIAL</h3>
          </div>
        </article>

        <Divider className='home-third-divider' />
      </section>

      <Footer />
    </main>
  );
}
