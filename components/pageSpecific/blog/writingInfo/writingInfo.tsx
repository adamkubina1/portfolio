import { Text } from '@/components/generic/typography/text';
import { LatestBook } from './latestBook';

export const WritingInfo = () => {
  return (
    <div className=''>
      <LatestBook />
      <Text className='text-justify'>
        Why do I write? Well, working in the field that is constantly evolving
        and changing, requires me to keep up with it. So I am always in a
        process of learning new things. My favorite way of learning is the
        Feynman Technique. Part of this technique is teaching the concepts you
        are studying to someone else. This motivates me to write about things I
        am studying.
      </Text>
    </div>
  );
};
