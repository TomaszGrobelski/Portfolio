import { useEffect, useRef, useState } from 'react';

const HeroHeader = ({ className }: { className: string }) => {
  const authorName = 'TOMASZ';
  const authorSurname = 'GROBELSKI';
  const [name, setName] = useState(' '.repeat(authorName.length));
  const [surname, setSurname] = useState(' '.repeat(authorSurname.length));
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nameIntervalRef = useRef<null | number>(null);
  const surnameIntervalRef = useRef<null | number>(null);

  useEffect(() => {
    const startAnimation = () => {
      let nameIteration = 0;
      let surnameIteration = 0;

      nameIntervalRef.current = setInterval(() => {
        setName((oldName) => {
          const chars = oldName.split('');
          for (let i = 0; i < chars.length; i++) {
            if (i < Math.floor(nameIteration)) {
              chars[i] = authorName[i];
            } else {
              chars[i] = letters[Math.floor(Math.random() * letters.length)];
            }
          }
          return chars.join('');
        });

        nameIteration += 1 / 15;

        if (nameIteration >= authorName.length) {
          clearInterval(nameIntervalRef.current!);
        }
      }, 50);

      surnameIntervalRef.current = setInterval(() => {
        setSurname((oldSurname) => {
          const chars = oldSurname.split('');
          for (let i = 0; i < chars.length; i++) {
            if (i < Math.floor(surnameIteration)) {
              chars[i] = authorSurname[i];
            } else {
              chars[i] = letters[Math.floor(Math.random() * letters.length)];
            }
          }
          return chars.join('');
        });

        surnameIteration += 1 / 10;

        if (surnameIteration >= authorSurname.length) {
          clearInterval(surnameIntervalRef.current!);
        }
      }, 45);
    };
    const timeoutId = setTimeout(startAnimation, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(nameIntervalRef.current!);
      clearInterval(surnameIntervalRef.current!);
    };
  }, []);

  return (
    <h1 className={className}>
      <span>{name}</span>
      <span>{surname}</span>
    </h1>
  );
};

export default HeroHeader;
