import { Text } from '@/components/generic/typography/text';
import { LatestBook } from './latestBook';

export const WritingInfo = () => {
  return (
    <div className='flex max-md:flex-col items-center'>
      <Text>
        Even though using often arouses curiosity due to its resemblance to
        classical Latin, it is not intended to have meaning. Where text is
        visible in a document, people tend to focus on the textual content
        rather than upon overall presentation.
      </Text>
      <LatestBook />
    </div>
  );
};
