import { Ceviche_One } from 'next/font/google';

const cevicheOne = Ceviche_One({
  subsets: ['latin'],
  weight: '400',
});

export const PageHeading = ({ heading }: { heading: string }) => {
  return <h1 className={`text-5xl ${cevicheOne.className}`}>{heading}</h1>;
};
