import { random } from '@/utils/random';
import { wrap } from '@/utils/wrap';
import { useEffect, useRef, useState } from 'react';

export default function useTypewriter(array: string[], speed: number = 100) {
  const [currentText, setCurrentText] = useState('');
  const letterIndex = useRef(0);
  const wordIndex = useRef(random(0, array.length));
  const text = array[wordIndex.current];
  const delay = useRef(speed);

  useEffect(() => {
    letterIndex.current = 0;
    setCurrentText('');
  }, [text, speed]);

  useEffect(() => {
    if (letterIndex.current < text.length) {
      const timeoutId = setTimeout(() => {
        const nextCharacter = text.charAt(letterIndex.current);
        setCurrentText((prev) => prev + nextCharacter);
        letterIndex.current += 1;
      }, delay.current);
      return () => clearTimeout(timeoutId);
    } else if (letterIndex.current === text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText('');
        wordIndex.current = wrap(wordIndex.current + 1, array.length);
        delay.current = random(speed * 0.5, speed * 2.2);
      }, 2500);
      return () => clearTimeout(timeoutId);
    }
  }, [text, delay, currentText, array, speed]);

  return currentText;
}
