import { colorFading } from '@/lib/animations/colorFading';
import { motion } from 'framer-motion';
import { Ceviche_One } from 'next/font/google';

const cevicheOne = Ceviche_One({
  subsets: ['latin'],
  weight: '400',
});

export const Hero = () => {
  return (
    <>
      <div className={'flex gap-2'}>
        <p className={'text-7xl font-bold'}>Hey! </p>
        <div className={'pt-2 text-2xl'}>
          <p className={' '}>My</p>
          <p>name is</p>
        </div>
      </div>
      <motion.h1
        className={`text-9xl ${cevicheOne.className} bg-gradient-to-r from-light-highlight1 to-light-highlight2 dark:from-dark-highlight1 dark:to-dark-highlight2`}
        style={{
          // backgroundImage: colorFading.backgroundImage,
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          backgroundSize: '400% 400%',
        }}
        animate={{ backgroundPosition: colorFading.backgroundPosition }}
        transition={{
          backgroundPosition: {
            ease: 'easeInOut',
            duration: 20,
            repeat: Infinity,
          },
        }}
      >
        Adam
      </motion.h1>

      <p className={'text-2xl'}>and I am a</p>
      <p className='text-4xl'>developer</p>
    </>
  );
};

const WORD_LIST = [
  'developer',
  'student',
  'designer',
  'problem-solver',
  'analyst',
];
const moveAnim = [0, 1, 0, 0];
const timing = [0, 0.1, 0.15, 1];
const speed = 5;

const WhoAmI = ({ words }: { words: string[] }) => {
  return (
    <motion.div className='flex flex-col items-center'>
      {words.map((word, i) => {
        return (
          <motion.p
            key={i}
            className='text-4xl absolute'
            animate={{
              opacity: moveAnim,
            }}
            transition={{
              ease: 'easeIn',
              duration: WORD_LIST.length * speed,
              delay: speed * i - speed * 0.1,
              repeat: Infinity,
              times: timing,
            }}
          >
            {word}
          </motion.p>
        );
      })}
    </motion.div>
  );
};
