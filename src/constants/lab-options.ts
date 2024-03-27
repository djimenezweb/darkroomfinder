export const sizes = [
  { id: '35', shortName: '35mm', fullName: '35 mm', checked: true },
  { id: 'mf', shortName: 'MF', fullName: 'medium format', checked: false },
  { id: 'lf', shortName: 'LF', fullName: 'large format', checked: false },
  { id: 'sub', shortName: 'sub', fullName: 'submin', checked: false }
];

export const processes = [
  {
    id: 'bw',
    shortName: 'b/w',
    fullName: 'b/w',
    longName: 'black & white',
    checked: true
  },
  {
    id: 'c41',
    shortName: 'color C41',
    fullName: 'color C41',
    longName: 'color negative C41',
    checked: false
  },
  {
    id: 'e6',
    shortName: 'color E6',
    fullName: 'color E6',
    longName: 'color slide E6',
    checked: false
  },
  {
    id: 'ra4',
    shortName: 'RA4 prints',
    fullName: 'RA4 prints',
    longName: 'color prints RA4',
    checked: false
  },
  {
    id: 'other',
    shortName: 'other',
    fullName: 'other',
    longName: 'other processes',
    checked: false
  }
];

export const labOptions = { sizes: sizes, processes: processes };
