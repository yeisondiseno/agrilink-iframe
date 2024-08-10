'use client';
import React, { useState } from 'react';
import Image from 'next/image';
// Components
import { Modal } from '@components/index';
// Styles
import './CardButton.scss';

const CardButton = () => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className='card-button' onClick={() => setIsOpen(!isOpen)}>
        <Image
          src='	https://cdn.eventtia.com/sponsor_logos/24360/medium/Agrilink17188266231718826623.png?1718826623'
          alt='test'
          height={60}
          width={103}
        />
      </button>
      <Modal open={isOpen} handledOpen={() => setIsOpen(!isOpen)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem?
          Nostrum iure eos asperiores autem quo, consequuntur sint accusantium
          voluptatum aut voluptates repellat. Qui porro earum incidunt sequi
          libero necessitatibus!
        </p>
      </Modal>
    </>
  );
};

export default CardButton;
