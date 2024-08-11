'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Components
import { Modal, Card } from '@components/index';
// Styles
import './CardButton.scss';

const CardButton = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className='module-card-button' onClick={() => setIsOpen(!isOpen)}>
        <Image
          src='	https://cdn.eventtia.com/sponsor_logos/24360/medium/Agrilink17188266231718826623.png?1718826623'
          alt='test'
          height={60}
          width={103}
        />
      </button>
      <Modal open={isOpen} handledOpen={() => setIsOpen(!isOpen)}>
        <header className='module-card-button-header'>
          Información del patrocinador
        </header>
        <div className='module-card-button-content'>
          <Card className='module-card-button-content-card'>
            <Image
              src='	https://cdn.eventtia.com/sponsor_logos/24360/medium/Agrilink17188266231718826623.png?1718826623'
              alt='test'
              height={60}
              width={103}
            />
            <span className='module-card-button-content-card-line' />
            <div>
              <p className='bold sm'>Jardin Exotics</p>
              <Link className='text xs' href={'https://jardinexotics.com.co/'}>
                https://jardinexotics.com.co/
              </Link>
            </div>
          </Card>
          <p className='bold'>Descripción de la compañia</p>
          <h2 className='module-card-button-content-title text bold'>
            Ubicación: Nivel 1, stand #20
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            autem? Nostrum iure eos asperiores autem quo, consequuntur sint
            accusantium voluptatum aut voluptates repellat. Qui porro earum
            incidunt sequi libero necessitatibus!
          </p>
        </div>
      </Modal>
    </>
  );
};

export default CardButton;
