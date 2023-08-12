import { Text } from '@/components/generic/typography/text';
import { TextHighlight } from '@/components/generic/typography/textHighlight';
import {
  animationPhases,
  animationTimeline,
} from '@/lib/animations/animationTimeline';

export const AboutInfo = () => {
  return (
    <div className='max-w-xl flex'>
      <Text className='mb-6 md:mb-16 hyphens-auto text-justify'>
        I am{' '}
        <TextHighlight
          animate
          delay={animationPhases.phaseZero}
          duration={animationTimeline.about.highlightDuration}
        >
          masters student
        </TextHighlight>{' '}
        based in Prague 🇨🇿. My main area of focus is software/systems{' '}
        <TextHighlight
          animate
          delay={
            animationPhases.phaseZero + animationTimeline.about.highlightDelay
          }
          duration={animationTimeline.about.highlightDuration}
        >
          development
        </TextHighlight>
        , but I also greatly enjoy UI/UX{' '}
        <TextHighlight
          animate
          delay={animationPhases.phaseZero}
          duration={
            animationTimeline.about.highlightDuration +
            animationTimeline.about.highlightDelay * 2
          }
        >
          design
        </TextHighlight>
        . I am always in the process of learning new things.
      </Text>
    </div>
  );
};
