import React from 'react';
import Image from 'next/image';
// Components
import { Card } from '@components/index';
import { CardButton } from '@modules/index';
// Styles
import './page.scss';

export default function Home() {
  return (
    <main className='home max-block'>
      <section>
        <h1>Patrocinadores</h1>
        <Card>
          <CardButton />
        </Card>
      </section>
    </main>
  );
}
