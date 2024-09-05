// Utils
import { normalizeText } from '@utils/mapData';

const sponsor = [
  'JARDIN EXOTICS',
  'PUERTO ANTIOQUIA',
  'TOMRA',
  'WESTFALIA',
  'CARTAMA',
  'FRUTY GREEN',
  'UNIBAN',
  'CFS',
  'MAERSK',
];

export const sponsorList = sponsor.map((e) => normalizeText(e));

const notSponsor = [
  'AGRÍCOLAS EL RUIZ',
  'AGRILINK',
  'AGROEQUIPOS ALPUJARRA',
  'AGROMAQUINAS',
  'AGRONEGOCIOS - NBF',
  'AGROPACK',
  'AGROSAVIA',
  'ARCANGEL MIGUEL',
  'ASM SORT',
  'AVO PAK',
  'BANADUANA',
  'BAYER',
  'CALIDRA',
  'CAMPOFERT',
  'CI TALSA',
  'CMA-CGM',
  'COLINAGRO',
  'COLTRÓPICOS',
  'CORTEVA BIOLOGICALS',
  'CORPOHASS',
  'CRENTO',
  'EUROFERT',
  'EVOAGRO',
  'FRIOPACKING',
  'FRUTAND',
  'GAICA',
  'GEOCAMPO',
  'GRAZIANI',
  'GREEN KEEPER',
  'GRUPO CERRO BRAVO',
  'HANDTMANN',
  'HAPAG LLOYD',
  'HIPERBARIC',
  'INNOVAK',
  'INVESA',
  'J&S',
  'LA HACIENDA',
  'LABORAGRO HASS',
  'LIQUIDSEAL',
  'LIVENTUS',
  'MANAGRO',
  'MICROFERTISA',
  'MONÓMEROS',
  'MOTOMART',
  'MULTIVAC',
  'NATURAL HARVEST',
  'ONE LINE',
  'PAPELSA',
  'PETRODERIVADOS',
  'PHYTOMA',
  'PIERALISI',
  'PLASTICOS OJARA',
  'RAINFOREST',
  'REFRIDCOL',
  'REFRINDUSTRIAL',
  'RIO CLARO',
  'SAFER',
  'SMURFITKAPA',
  'SOLUMAT',
  'SQM',
  'SUNFORETS-EUTECH',
  'SYNGENTA-VALAGRO',
  'SYS',
  'TRACTOCENTRO',
  'UCC',
  'VERDFRUITS',
  'VIVERO GENESIS',
  'YAK LOGÍSTICA INDUSTRIAL',
];

export const notSponsorList = notSponsor.map((e) => normalizeText(e));

const media = [''];

export const mediaList = media.map((e) => normalizeText(e));
