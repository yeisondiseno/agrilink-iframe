import React from 'react';
// Components
import { Card } from '@components/index';
import { CardButton } from '@modules/index';
// Utils
import { mapData } from '@utils/mapData';
// Config
import { env } from '@config/env';
// Styles
import './page.scss';

async function getData(url: string) {
  console.log('env', env);
  const res = await fetch(`${env.urlApi}${url}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const dataCategory = await getData('/sponsors?include=category');
  const dataPage2 = await getData(
    '/sponsors?include=category&page%5Bnumber%5D=2&page%5Bsize%5D=24',
  );
  const dataPage3 = await getData(
    '/sponsors?include=category&page%5Bnumber%5D=3&page%5Bsize%5D=24',
  );

  const totalData = mapData({
    base: dataCategory,
    page2: dataPage2,
    page3: dataPage3,
  });
  console.log('totalData', totalData.length);

  return (
    <main className='home max-block'>
      <section>
        <h1>Patrocinadores</h1>

        <Card>
          {totalData?.map(
            ({ description, name, website, logo }: Record<string, any>) => {
              return (
                <CardButton
                  key={name}
                  name={name}
                  img={logo}
                  description={description}
                  website={website}
                />
              );
            },
          )}
        </Card>
      </section>
    </main>
  );
}
