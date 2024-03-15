export const sizes = [
  { id: '35mm', shortName: '35mm', fullName: '35 mm', checked: true },
  { id: 'medium', shortName: 'MF', fullName: 'medium format', checked: false },
  { id: 'large', shortName: 'LF', fullName: 'large format', checked: false },
  { id: 'submin', shortName: 'sub', fullName: 'submin', checked: false }
];

export const processes = [
  {
    id: 'bw',
    shortName: 'b/w',
    fullName: 'black & white',
    checked: true
  },
  {
    id: 'c41',
    shortName: 'color C41',
    fullName: 'color negative C41',
    checked: false
  },
  {
    id: 'e6',
    shortName: 'color E6',
    fullName: 'color slide E6',
    checked: false
  },
  {
    id: 'ra4',
    shortName: 'RA4 prints',
    fullName: 'color prints RA4',
    checked: false
  },
  {
    id: 'other',
    shortName: 'other',
    fullName: 'other processes',
    checked: false
  }
];
