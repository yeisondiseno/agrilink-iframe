type DataType = Record<string, any>;

const distributionData = (data: DataType) =>
  data.data.map(({ attributes }: DataType) => {
    const {
      description,
      name,
      website,
      logo: { medium },
    } = attributes;

    return { description, name, website, logo: medium };
  });

export const mapData = (data: DataType[]) => {
  const mappedBase = data.flatMap((e) => distributionData(e));

  // distributionData(base);
  // const mappedPage2 = distributionData(page2);
  // const mappedPage3 = distributionData(page3);

  return [...mappedBase];
};

export const normalizeText = (text: string) =>
  text.trim().toLocaleLowerCase().replaceAll(' ', '');
