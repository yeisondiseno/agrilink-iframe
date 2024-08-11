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

export const mapData = ({
  base,
  page2,
  page3,
}: {
  base: DataType;
  page2: DataType;
  page3: DataType;
}) => {
  const mappedBase = distributionData(base);
  const mappedPage2 = distributionData(page2);
  const mappedPage3 = distributionData(page3);

  return [...mappedBase, ...mappedPage2, ...mappedPage3];
};
