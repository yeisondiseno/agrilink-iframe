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
  return Array.from(new Set(data.flatMap((e) => distributionData(e))));
};

export const normalizeText = (text: string) =>
  text
    ?.normalize('NFD')
    ?.replace(/[\u0300-\u036f]/g, '')
    ?.replace(/[^a-zA-Z0-9 ]/g, '')
    ?.trim()
    ?.toLocaleLowerCase()
    ?.replaceAll(' ', '');

export const constSortByList = ({
  data,
  list,
}: {
  data: DataType[];
  list: string[];
}) =>
  data.sort((a, b) => {
    const listNormal = list.map((e) => normalizeText(e));

    if (!listNormal.includes(normalizeText(a.name))) {
      return 0;
    }

    return (
      listNormal.indexOf(normalizeText(a.name)) -
      listNormal.indexOf(normalizeText(b.name))
    );
  });
