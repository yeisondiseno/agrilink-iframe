import React from 'react';
import Link from 'next/link';
// Components
import { LogoIcon } from '@/components/index';
// Styles
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <footer className='o-footer'>
        <section className='o-footer-content max-block'>
          <div>
            <Link href='./' className='o-footer-link'>
              <LogoIcon width={465} />
            </Link>
            <p className='light'>
              ALMA es para todas las mujeres, no importa tu nivel deportivo o
              condición física, lo importante es tu superación, tu salud y
              enfoque de resto déjalo en nuestras manos para guiarte en lo
              deportivo, nutricional y mucho mas.
            </p>
            <div>Social</div>
          </div>

          <div>
            <h2>Contacto</h2>
            <ul>
              <li>Cra 30 # 4ª-45 Local 9807 Sótano 2</li>
              <li>Medellín - Colombia</li>
              <li>info@almafitness.com.co</li>
              <li>+57 304 378 7141</li>
              <li>almafitness.com.co</li>
            </ul>
          </div>

          <div>
            <h2>Horarios</h2>
            <ul>
              <li>Lunes 05:00 a.m a 19:00 p.m</li>
              <li>Martes 05:00 a.m a 19:00 p.m</li>
              <li>Miercoles 05:00 a.m a 19:00 p.m</li>
              <li>Jueves 05:00 a.m a 19:00 p.m</li>
              <li>Viernes 05:00 a.m a 19:00 p.m</li>
              <li>Sábado 08:00 a.m a 19:00 p.m</li>
              <li>Domingo Cerrado</li>
            </ul>
          </div>
        </section>
      </footer>

      <aside className='o-footer-aside'>
        <p className='light'>
          Derechos Reservados © 2024 ALMA Fitness Online - Todos los derechos
          reservados
        </p>
      </aside>
    </>
  );
};

export default Footer;
