import { animationTimeline } from '@/lib/animations/animationTimeline';
import { motion } from 'framer-motion';

export const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className='w-full h-full flex flex-col items-center '
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,

      x: { duration: animationTimeline.pageTransDurationX },
      opacity: { duration: animationTimeline.pageTransDurationOpacity },
    }}
  >
    {children}
  </motion.div>
);
