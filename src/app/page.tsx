import React from 'react';
// Components
import { Card } from '@components/index';
import { CardButton } from '@modules/index';
// Utils
import { mapData, normalizeText, constSortByList } from '@utils/mapData';
// Constant
import { sponsorList, notSponsorList, mediaList } from '@constant/homeData';
// Config
import { env } from '@config/env';
// Styles
import './page.scss';

export const revalidate = 60 * 5;

async function getData(url: string) {
  const res = await fetch(`${env.urlApi}${url}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const dataCategory = await getData('/sponsors?include=category');
  const dataPage2 = await getData(
    '/sponsors?include=category&page%5Bnumber%5D=2&page%5Bsize%5D=30',
  );
  const dataPage3 = await getData(
    '/sponsors?include=category&page%5Bnumber%5D=3&page%5Bsize%5D=30',
  );
  const dataPage4 = await getData(
    '/sponsors?include=category&page%5Bnumber%5D=4&page%5Bsize%5D=30',
  );
  const dataPage5 = await getData(
    '/sponsors?include=category&page%5Bnumber%5D=5&page%5Bsize%5D=30',
  );
  const dataPage6 = await getData(
    '/sponsors?include=category&page%5Bnumber%5D=6&page%5Bsize%5D=30',
  );

  const dataPage7 = await getData(
    '/sponsors?include=category&page%5Bnumber%5D=7&page%5Bsize%5D=30',
  );

  const totalData = mapData([
    dataCategory,
    dataPage2,
    dataPage3,
    dataPage4,
    dataPage5,
    dataPage6,
    dataPage7,
  ]);

  const sponsors = constSortByList({
    data: totalData.filter(({ name }) => {
      const normalName = normalizeText(name);
      return sponsorList.includes(normalName);
    }),
    list: sponsorList,
  });

  const notSponsors = constSortByList({
    data: totalData.filter(({ name }) => {
      const normalName = normalizeText(name);
      return (
        !sponsorList.includes(normalName) &&
        !mediaList.includes(normalName) &&
        notSponsorList.includes(normalName)
      );
    }),
    list: notSponsorList,
  });

  const restOfSponsors = constSortByList({
    data: totalData.filter(({ name }) => {
      const normalName = normalizeText(name);
      return (
        !sponsorList.includes(normalName) &&
        !mediaList.includes(normalName) &&
        !notSponsorList.includes(normalName)
      );
    }),
    list: [],
  });

  return (
    <main className='home max-block'>
      <section>
        <h1>Patrocinadores</h1>
        <Card className='home-section'>
          {sponsors?.map(
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

        <h1 style={{ marginTop: '3rem' }}>Empresas vinculadas</h1>

        <Card className='home-section'>
          {[...notSponsors, ...restOfSponsors]?.map(
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
