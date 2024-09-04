import React from 'react';
// Components
import { Card } from '@components/index';
import { CardButton } from '@modules/index';
// Utils
import {
  mapData,
  normalizeText,
  constSortByList,
  DataType,
} from '@utils/mapData';
// Constant
import { sponsorList, notSponsorList } from '@constant/homeData';
// Config
import { env } from '@config/env';
// Styles
import './page.scss';

async function getData(url: string) {
  const res = await fetch(`${env.urlApi}${url}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const sponsorListNormalize = sponsorList.map((e) => normalizeText(e));

export default async function Home() {
  const dataCategory = await getData('/sponsors?include=category');
  const dataPage2 = await getData(
    '/sponsors?include=category&page%5Bnumber%5D=2&page%5Bsize%5D=24',
  );
  const dataPage3 = await getData(
    '/sponsors?include=category&page%5Bnumber%5D=3&page%5Bsize%5D=24',
  );

  const totalData = mapData([dataCategory, dataPage2, dataPage3]);
  console.log(totalData.length);

  const sponsors = await constSortByList({
    data: totalData.filter(({ name }) =>
      sponsorListNormalize.includes(normalizeText(name)),
    ),
    list: sponsorListNormalize,
  });

  const notSponsors = await constSortByList({
    data: totalData.filter(
      ({ name }) => !sponsorListNormalize.includes(normalizeText(name)),
    ),
    list: notSponsorList,
  });

  return (
    <main className='home max-block'>
      <section>
        <h1>Patrocinadores</h1>
        <p>{totalData.length}</p>
        <Card>
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
        <Card>
          {notSponsors?.map(
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
