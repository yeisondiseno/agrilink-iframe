import React from 'react';
import Image from 'next/image';
// Components
import { Card } from '@/components';
// Styles
import './page.scss';

export default function Home() {
  return (
    <main className='home max-block'>
      <section>
        <h1>Patrocinadores</h1>
        <Card>
          <button className='card-button'>
            <Image
              src='	https://cdn.eventtia.com/sponsor_logos/24360/medium/Agrilink17188266231718826623.png?1718826623'
              alt='test'
              height={60}
              width={103}
            />
          </button>
        </Card>
      </section>
    </main>
  );
}
