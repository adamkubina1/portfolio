import { Undertext } from '@/components/generic/typography/underText';
import { ShelfVolumes } from '@/lib/types/googleBooksAPI';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const LatestBook = () => {
  const { data, error } = useSWR(
    'https://www.googleapis.com/books/v1/users/104062055506205789874/bookshelves/3/volumes',
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const bookVolumes = data as ShelfVolumes;

  return (
    <div className='flex flex-col items-center max-w-[96px] md:max-w-[128px] ml-2  float-right'>
      <Undertext className='text-center'>Now reading</Undertext>
      <Link
        href={bookVolumes.items[0].volumeInfo.canonicalVolumeLink}
        target='_blank'
      >
        <div className='relative w-[96px] h-[125.25px] md:w-[128px] md:h-[167px]'>
          <Image
            src={bookVolumes.items[0].volumeInfo.imageLinks.thumbnail}
            alt={bookVolumes.items[0].volumeInfo.title}
            style={{ objectFit: 'cover' }}
            className='rounded-lg'
            fill
          />
        </div>
      </Link>
    </div>
  );
};
