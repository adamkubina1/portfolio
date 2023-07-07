'use client';
import { motion } from 'framer-motion';

export const Diamond = () => {
  return (
    <motion.div
      style={{
        // backgroundImage: 'linear-gradient(to bottom right, red, yellow)',
        width: '50%',
        aspectRatio: '1',
        background: 'black',
        borderRadius: '61% 39% 16% 84% / 57% 72% 28% 43%',
        backgroundImage: 'linear-gradient(45deg, blue, red,  purple, blue)',
        backgroundSize: '400% 400%',
        boxShadow: 'rgba(0, 0, 0, 0.65) 0px 60px 40px -7px;',
        position: 'relative',
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 1, ease: 'easeInOut' },
      }}
      animate={{
        borderRadius: [
          '61% 39% 16% 84% / 57% 72% 28% 43%',
          '65% 35% 55% 45% / 55% 50% 55% 45%',
          '60% 75% 40% 80% / 70% 70% 60% 65%',
          '55% 95% 65% 90% / 75% 65% 85% 70%',
          '60% 40% 50% 45% / 60% 40% 60% 40%',
          '55% 95% 65% 90% / 75% 65% 85% 70%',
          '60% 40% 50% 45% / 60% 40% 60% 40%',
          '60% 75% 40% 80% / 70% 70% 60% 65%',
          '40% 60% 55% 45% / 50% 60% 40% 50%',
          '65% 35% 55% 45% / 55% 50% 55% 45%',
          '61% 39% 16% 84% / 57% 72% 28% 43%',
        ],
        backgroundPosition: ['0% 0%', '100% 50%', '50% 100%', '0% 0%'],
        x: [0, 20, 0, 10, 0, 5, 0],
        y: [0, 20, 0, 5, 0, 10, 0],
      }}
      transition={{
        borderRadius: { ease: 'easeInOut', duration: 20, repeat: Infinity },
        backgroundPosition: {
          ease: 'easeInOut',
          duration: 20,
          repeat: Infinity,
        },
        x: { ease: 'easeInOut', duration: 10, repeat: Infinity },
        y: { ease: 'easeInOut', duration: 10, repeat: Infinity },
      }}
      drag
      dragSnapToOrigin
      dragConstraints={{
        top: -20,
        left: -20,
        right: 20,
        bottom: 20,
      }}
    ></motion.div>
  );
};

// 0%    { border-radius: 65% 35% 55% 45% / 55% 50% 55% 45%; }
// 12.5% { border-radius: 60% 75% 40% 80% / 70% 70% 60% 65%; }
// 25%   { border-radius: 55% 95% 65% 90% / 75% 65% 85% 70%; }
// 37.5% { border-radius: 60% 40% 50% 45% / 60% 40% 60% 40%; }
// 50%   { border-radius: 55% 95% 65% 90% / 75% 65% 85% 70%; }
// 62.5% { border-radius: 60% 40% 50% 45% / 60% 40% 60% 40%; }
// 75%   { border-radius: 60% 75% 40% 80% / 70% 70% 60% 65%; }
// 87.5% { border-radius: 40% 60% 55% 45% / 50% 60% 40% 50%; }
// 100%  { border-radius: 65% 35% 55% 45% / 55% 50% 55% 45%; }
