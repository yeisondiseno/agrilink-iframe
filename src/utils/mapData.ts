type DataType = Record<string, any>;

export const mapData = ({
  base,
  page2,
  page3,
}: {
  base: DataType;
  page2: DataType;
  page3: DataType;
}) => {
  const mapPage2 = page2;
  console.log('mapPage2', mapPage2.data);

  const mappedBase = base.data.map(({ attributes }: DataType) => {
    const {
      description,
      name,
      website,
      logo: { medium },
    } = attributes;

    return { description, name, website, logo: medium };
  });

  const mappedPage2 = mapPage2.data.map(({ attributes }: DataType) => {
    const {
      description,
      name,
      website,
      logo: { medium },
    } = attributes;

    return { description, name, website, logo: medium };
  });

  const mappedPage3 = page3.data.map(({ attributes }: DataType) => {
    const {
      description,
      name,
      website,
      logo: { medium },
    } = attributes;

    return { description, name, website, logo: medium };
  });

  return [...mappedBase, ...mappedPage2, ...mappedPage3];
};
