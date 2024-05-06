'use client';

import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { wrap } from '@/utils/wrap';
import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export function Carousel({ images }: { images: string[] }) {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [pillWidth, setPillWidth] = useState<number | number[]>(8);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const length = images.length;
  const buttonStyles =
    'block px-1 py-2.5 rounded-md font-normal text-gray-dark-800 hover:text-gray-dark-1100 hover:bg-gray-dark-500';

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? '120%' : '-120%' }),
    center: { x: 0 },
    exit: (direction: number) => ({ x: direction < 0 ? '120%' : '-120%' })
  };

  function handleClick(newDirection: number) {
    const nextIndex = wrap(index + newDirection, length);
    setIndex([nextIndex, newDirection]);
    setPillWidth([8, 12, 12, 8]);
  }

  return (
    <motion.div
      // layoutId={'containerKey' + String(index)}
      className="min-h-[262px] rounded-md border border-gray-dark-500 bg-gray-dark-300 p-5"
    >
      <div className="flex w-full items-center justify-between">
        {length > 1 && (
          <button
            type="button"
            className={twMerge(buttonStyles)}
            onClick={() => handleClick(-1)}
          >
            <ChevronLeftIcon className="size-6" />
          </button>
        )}
        <div className="flex w-full grow justify-center">
          <div
            className="relative overflow-hidden"
            onClick={() => setIsModalOpen(true)}
          >
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <motion.div
                // onClick={() => setIsModalOpen(true)}
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Image
                  src={images[index]}
                  alt={`Picture ${index + 1}`}
                  width={332}
                  height={200}
                  className="h-[200px] object-contain px-4"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {length > 1 && (
          <button
            type="button"
            className={twMerge(buttonStyles)}
            onClick={() => handleClick(1)}
          >
            <ChevronRightIcon className="size-6" />
          </button>
        )}
      </div>
      <div className="mt-3 flex justify-center gap-2">
        {images.map((picture, i) => (
          <div key={picture} className="size-2 rounded-full bg-gray-dark-900">
            {i === index && (
              <motion.div
                layoutId="pill"
                className="absolute z-10 size-2 rounded-full bg-gray-dark-1200"
                animate={{ width: pillWidth }}
                transition={{ duration: 0.5, times: [0, 0.1, 0.5, 1] }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
