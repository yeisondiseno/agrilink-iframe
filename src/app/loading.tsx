import React from 'react';
// Components
import { Card, Skeleton } from '@components/index';
// Styles
import './page.scss';

const loading = () => {
  return (
    <main className='home max-block'>
      <section>
        <Skeleton height={20} className='loading-card-title' />

        <Card className='loading-card'>
          <Skeleton height={60} className='loading-card-item' />
          <Skeleton height={60} className='loading-card-item' />
          <Skeleton height={60} className='loading-card-item' />
          <Skeleton height={60} className='loading-card-item' />
          <Skeleton height={60} className='loading-card-item' />
        </Card>
      </section>
    </main>
  );
};

export default loading;
