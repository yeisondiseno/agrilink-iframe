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

  return [...mappedBase];
};

export const normalizeText = (text: string) =>
  text.trim().toLocaleLowerCase().replaceAll(' ', '');

export const constSortByList = ({
  data,
  list,
}: {
  data: DataType[];
  list: string[];
}) =>
  data.sort((a, b) => {
    const listNormal = list.map((e) => normalizeText(e));

    return (
      listNormal.indexOf(normalizeText(a.name)) -
      listNormal.indexOf(normalizeText(b.name))
    );
  });
