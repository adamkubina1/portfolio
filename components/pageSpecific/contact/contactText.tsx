import { Text } from '@/components/generic/typography/text';
import { TextHighlight } from '@/components/generic/typography/textHighlight';
import {
  animationPhases,
  animationTimeline,
} from '@/lib/animations/animationTimeline';

export const ContactText = () => {
  return (
    <div className='max-w-xl flex'>
      <Text className='mb-6 md:mb-12 hyphens-auto text-justify'>
        If you are interested in{' '}
        <TextHighlight
          animate
          delay={animationPhases.phaseZero}
          duration={animationTimeline.contact.highlightDuration}
        >
          joining forces
        </TextHighlight>{' '}
        with me or asking me about anything, do not hasitate to{' '}
        <TextHighlight
          animate
          delay={
            animationPhases.phaseZero + animationTimeline.contact.highlightDelay
          }
          duration={animationTimeline.contact.highlightDuration}
        >
          contact me
        </TextHighlight>{' '}
        on my social network profiles or use the form below. I will
        <TextHighlight
          animate
          delay={
            animationPhases.phaseZero +
            animationTimeline.contact.highlightDelay * 2
          }
          duration={animationTimeline.contact.highlightDuration}
        >
          answer you ASAP
        </TextHighlight>{' '}
        :)
      </Text>
    </div>
  );
};
