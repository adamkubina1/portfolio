import { motion } from 'framer-motion';

export const TimelineItemAnim = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
