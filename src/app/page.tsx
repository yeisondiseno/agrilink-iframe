import React from 'react';
// Components
import { Card, Skeleton } from '@components/index';
import { CardButton } from '@modules/index';
// Config
import { env } from '@config/env';
// Styles
import './page.scss';

async function getData() {
  console.log('env', env);
  const res = await fetch(`${env.urlApi}/sponsors?include=category`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  console.log('data', data?.data);

  return (
    <main className='home max-block'>
      <section>
        <h1>Patrocinadores</h1>

        <Card>
          <CardButton />

          <CardButton />

          <CardButton />

          <CardButton />
        </Card>
      </section>
    </main>
  );
}
