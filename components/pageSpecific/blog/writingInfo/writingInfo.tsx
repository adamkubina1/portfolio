import { LatestBook } from './latestBook';

export const WritingInfo = () => {
  return (
    <div className='flex max-md:flex-col items-center'>
      <p>
        Even though using often arouses curiosity due to its resemblance to
        classical Latin, it is not intended to have meaning. Where text is
        visible in a document, people tend to focus on the textual content
        rather than upon overall presentation, so publishers use lorem ipsum
        when displaying a typeface or design in order to direct the focus to
        presentation. also approximates a typical distribution of letters in
        English.
      </p>
      <LatestBook />
    </div>
  );
};
