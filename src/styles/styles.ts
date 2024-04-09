import { CSSProperties } from 'react';

const styles = {
  uncheckedCheckBoxStyles:
    'cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1000 hover:text-gray-dark-1200 bg-transparent hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-900 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1',
  checkedCheckBoxStyles:
    'peer-checked:text-gray-dark-1200 peer-checked:bg-gray-dark-500 peer-checked:hover:bg-gray-dark-600 peer-checked:hover:border-gray-dark-800',
  inputTextStyles:
    'bg-gray-dark-400 block box-border w-full rounded-md shadow-sm text-gray-dark-1200 focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-gray-dark-900 focus-visible:ring-gray-dark-300 placeholder-gray-dark-900 border border-gray-dark-600 text-sm px-4 py-2'
};

const dropzoneStyles: { [key: string]: CSSProperties } = {
  base: {
    width: '100%',
    height: '5rem',
    paddingInline: '1rem',
    paddingBlock: '0.5rem',
    borderWidth: 1,
    borderRadius: '0.375rem',
    borderStyle: 'solid',
    backgroundColor: '#282828',
    borderColor: '#343434',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'default'
  },
  accept: {
    backgroundColor: '#1c1c1c',
    borderColor: '#a0a0a0'
  },
  reject: {
    backgroundColor: '#271700',
    borderColor: '#693f05'
  }
};

export { styles, dropzoneStyles };
