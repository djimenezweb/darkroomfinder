import { CSSProperties } from 'react';

const styles = {
  flexCenter: 'flex justify-center items-center',
  input: {
    text: 'bg-gray-dark-400 block box-border w-full rounded-md shadow-sm text-gray-dark-1200 focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-gray-dark-900 focus-visible:ring-gray-dark-300 placeholder-gray-dark-900 border border-gray-dark-600 text-sm px-4 py-2',
    error: 'bg-error-200 border border-error-500 placeholder-error-500',
    checkbox: {
      unchecked:
        'cursor-pointer text-center font-regular rounded outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-gray-dark-1000 hover:text-gray-dark-1200 bg-transparent hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-900 focus-visible:outline-red-600 shadow-sm text-xs px-2.5 py-1',
      checked:
        'peer-checked:text-gray-dark-1200 peer-checked:bg-gray-dark-500 peer-checked:hover:bg-gray-dark-600 peer-checked:hover:border-gray-dark-800'
    }
  },
  labsGrid:
    'mx-auto mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-2 xl:grid-cols-3',
  button: {
    xs: 'px-2.5 py-1 text-xs rounded-md font-normal',
    sm: 'px-4 py-2 text-base rounded-md font-normal',
    brand: 'bg-red-800 hover:bg-red-800/80 border border-red-600',
    gray: 'bg-gray-dark-500 hover:bg-gray-dark-600 border border-gray-dark-700 hover:border-gray-dark-800',
    warning:
      'text-error-900 hover:bg-error-900 hover:text-error-200 border border-error-500',
    reset:
      'bg-gray-dark-1200/[.026] border border-gray-dark-600 rounded-md text-gray-dark-900 hover:text-gray-dark-1100 hover:border-gray-dark-900 hover:bg-gray-dark-500'
  },
  tag: {
    xs: 'text-xs px-2.5 py-1 rounded',
    span: 'text-center text-gray-dark-1200 bg-gray-dark-500 border border-gray-dark-700 shadow-sm',
    button: {
      base: 'cursor-pointer text-center border rounded shadow-sm outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-red-600',
      active:
        'text-gray-dark-1200 bg-gray-dark-500 border-gray-dark-700 hover:bg-gray-dark-600 hover:border-gray-dark-800',
      inactive:
        'text-gray-dark-1100 bg-transparent border-gray-dark-700 hover:text-gray-dark-1200 hover:bg-gray-dark-600 hover:border-gray-dark-900'
    }
  },
  pagination: {
    base: 'text-center font-regular text-xs px-3 py-1 shadow-sm border rounded select-none',
    active:
      'text-gray-dark-1200 bg-gray-dark-500 hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-800',
    inactive:
      'text-gray-dark-1000 hover:text-gray-dark-1200 bg-transparent hover:bg-gray-dark-600 border-gray-dark-700 hover:border-gray-dark-900'
  }
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
