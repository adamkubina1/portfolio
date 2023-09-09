import { motion } from 'framer-motion';

export const PulsatingCircle = ({
  className,
  lightColor,
  delay = 0.4,
}: {
  className?: any;
  lightColor: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className={`w-1 h-1 rounded-full mx-auto ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        boxShadow: [
          `0 0 3px 2px ${lightColor}`,
          `0 0 5px 3px ${lightColor}`,
          `0 0 3px 2px ${lightColor}`,
        ],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        boxShadow: { repeat: Infinity, duration: 5, ease: 'linear' },

        opacity: { duration: 0.5, ease: 'easeIn' },
        scale: { duration: 0.5, ease: 'easeIn' },

        delay: delay,
      }}
      exit={{ opacity: 0, scale: 0 }}
    />
  );
};
