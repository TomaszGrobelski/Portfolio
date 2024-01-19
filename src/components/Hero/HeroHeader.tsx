import { useEffect, useRef, useState } from 'react';

const HeroHeader = () => {
  const targetName = 'TOMASZ GROBELSKI';
  const [name, setName] = useState(' '.repeat(targetName.length));
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const intervalRef = useRef<null | number>(null);

  useEffect(() => {
    let iteration = 0;
    intervalRef.current = setInterval(() => {
      setName((oldName) => {
        const chars = oldName.split('');
        for (let i = 0; i < chars.length; i++) {
          if (i < Math.floor(iteration)) {
            chars[i] = targetName[i];
          } else {
            chars[i] = letters[Math.floor(Math.random() * letters.length)];
          }
        }
        return chars.join('');
      });

      iteration += 1 / 5;

      if (iteration >= targetName.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, 30);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return <h1>{name}</h1>;
};

export default HeroHeader;
