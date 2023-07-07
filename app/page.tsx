import { Diamond } from '@/components/diamond';

export default function Home() {
  return (
    <>
      <h1>Lorem ipsum</h1>
      <p>
        In publishing and graphic design, lorem ipsum is common placeholder text
        used to demonstrate the graphic elements of a document or visual
        presentation, such as web pages, typography, and graphical layout. It is
        a form of "greeking". Even though using "lorem ipsum" often arouses
        curiosity due to its resemblance to classical Latin, it is not intended
        to have meaning. Where text is visible in a document, people tend to
        focus on the textual content rather than upon overall presentation, so
        publishers use lorem ipsum when displaying a typeface or design in order
        to direct the focus to presentation. "Lorem ipsum" also approximates a
        typical distribution of letters in English.
      </p>
      <div style={{ width: '400px', height: '400px' }} className={'ml-10'}>
        <Diamond />
      </div>
    </>
  );
}
