import { motion } from 'framer-motion';

export const LinkHighlighterLight = ({ className }: { className?: string }) => {
  return (
    <LinkHighlighterBase
      key={'linkHighlighterLight'}
      className={`dark:hidden  bg-yellow-300 ${className}`}
      lightColor={'rgb(250, 202, 21)'}
    />
  );
};

export const LinkHighlighterDark = ({ className }: { className?: string }) => {
  return (
    <LinkHighlighterBase
      key={'linkHighlighterDark'}
      className={`bg-gray-500 hidden dark:block ${className}`}
      lightColor={'rgb(211,211,211)'}
    />
  );
};

const LinkHighlighterBase = ({
  className,
  lightColor,
}: {
  className?: any;
  lightColor: string;
}) => {
  return (
    <motion.div
      className={`w-2 h-2 rounded-full mx-auto ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        boxShadow: [
          `0 0 3px 2px ${lightColor}`,
          `0 0 6px 3px ${lightColor}`,
          `0 0 3px 2px ${lightColor}`,
        ],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        boxShadow: { repeat: Infinity, duration: 5, ease: 'linear' },

        opacity: { duration: 0.5, ease: 'easeIn' },
        scale: { duration: 0.5, ease: 'easeIn' },

        delay: 0.4,
      }}
      exit={{ opacity: 0, scale: 0 }}
    />
  );
};
