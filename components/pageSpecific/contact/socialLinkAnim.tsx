import { motion } from 'framer-motion';

export const SocialLinkAnim = ({
  children,
  delay,
  duration,
}: {
  children: React.ReactNode;
  delay: number;
  duration: number;
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
