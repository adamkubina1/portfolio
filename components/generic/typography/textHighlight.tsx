import { motion } from 'framer-motion';

export const TextHighlight = ({
  children,
  animate = false,
  delay = 0,
  duration = 0.1,
}: {
  children: React.ReactNode;
  animate?: boolean;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.span
      initial={animate ? { backgroundPosition: '-150px center' } : {}}
      whileInView={
        animate
          ? {
              backgroundPosition: '0px center',
              transition: { delay: delay, duration: duration },
            }
          : {}
      }
      className='bg-gradient-to-t from-light-highlight1 to-light-highlight1  dark:from-dark-highlight1 dark:to-dark-highlight1'
      style={{
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block',
        borderRadius: generateRandomBorder(),
        padding: generateRandomPadding(),
      }}
    >
      {children}
    </motion.span>
  );
};

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateRandomBorder = () => {
  return `${randomNumber(18, 28)}% ${randomNumber(18, 28)}% ${randomNumber(
    18,
    28
  )}% ${randomNumber(18, 28)}%`;
};

const generateRandomPadding = () => {
  return `0px ${randomNumber(0, 4)}px 0px ${randomNumber(0, 4)}px`;
};
