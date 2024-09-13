'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Libraries
import sanitizeHtml from 'sanitize-html';
// Components
import { Modal, Card } from '@components/index';
// Styles
import './CardButton.scss';

type CardButtonType = {
  name: string;
  img: string;
  description?: string;
  website: string;
};

const CardButton = ({
  name,
  img,
  description = '',
  website,
}: CardButtonType) => {
  // State
  const [isOpen, setIsOpen] = useState(false);

  // Action
  const validLink = (link: string) => {
    const linkStandard = link
      .toLocaleLowerCase()
      .trim()
      .replace(/(https?:\/\/)|(www\.)/g, '');
    console.log('link', link);

    return `https://www.${linkStandard}`;
  };

  // render
  const renderSanitizeText = (text: string) => {
    const renderedHTML = sanitizeHtml(text);
    return { __html: renderedHTML };
  };

  return (
    <>
      <button className='module-card-button' onClick={() => setIsOpen(!isOpen)}>
        {img && (
          <Image
            src={img}
            alt={name}
            height={0}
            width={0}
            style={{
              width: '100%',
              maxWidth: '180px',
              height: 'auto',
              objectFit: 'fill',
            }}
          />
        )}
      </button>

      <Modal open={isOpen} handledOpen={() => setIsOpen(!isOpen)}>
        <header className='module-card-button-header'>
          Información del patrocinador
        </header>

        <div className='module-card-button-content'>
          <Card className='module-card-button-content-card'>
            {img && (
              <Image
                src={img}
                alt={name}
                height={0}
                width={0}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '150px',
                  objectFit: 'fill',
                }}
              />
            )}
            <span className='module-card-button-content-card-line' />
            <div>
              <p className='bold sm'>{name}</p>
              {website && (
                <Link
                  className='text xs'
                  href={validLink(website)}
                  target='_blank'
                >
                  {website}
                </Link>
              )}
            </div>
          </Card>

          <p className='bold'>Descripción de la compañia</p>
          <div
            className='module-card-button-content-sanitize'
            dangerouslySetInnerHTML={renderSanitizeText(description)}
          />
        </div>
      </Modal>
    </>
  );
};

export default CardButton;
