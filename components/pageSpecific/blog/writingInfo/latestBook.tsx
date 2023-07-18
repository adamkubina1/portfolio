import { ShelfVolumes } from '@/lib/types/googleBooksAPI';
import Image from 'next/image';
import Link from 'next/link';

const fetchBookVolumes = async () => {
  const data = await fetch(
    `https://www.googleapis.com/books/v1/users/104062055506205789874/bookshelves/3/volumes`,
    {
      next: { revalidate: 30 },
    }
  );

  if (!data.ok) throw new Error('Failed to fetch data');

  return data.json();
};

export const LatestBook = async () => {
  const bookVolumes = (await fetchBookVolumes()) as ShelfVolumes;

  if (bookVolumes.items.length === 0) return null;

  return (
    <div className='flex flex-col items-center'>
      <p>Reading rn</p>
      <Link
        href={bookVolumes.items[0].volumeInfo.canonicalVolumeLink}
        target='_blank'
      >
        <div className='relative w-40 h-40'>
          <Image
            src={bookVolumes.items[0].volumeInfo.imageLinks.thumbnail}
            alt={bookVolumes.items[0].volumeInfo.title}
            style={{ objectFit: 'cover' }}
            className='rounded-lg'
            fill
          />
        </div>
      </Link>
      <div className='text-sm whitespace-nowrap'>
        {bookVolumes.items[0].volumeInfo.title}
      </div>
    </div>
  );
};
