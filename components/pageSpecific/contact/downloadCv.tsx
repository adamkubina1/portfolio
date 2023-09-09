import { GrDocumentDownload } from 'react-icons/gr';

export const DownloadCv = () => {
  return (
    <a href={'/documents/adam-kubina-cv.pdf'} download={'adam-kubina-cv.pdf'}>
      <button className='border-[1px] px-4 py-2 rounded-xl shadow-sm flex flex-row items-center gap-2 dark:border-gray-700 hover:cursor-pointers hover:scale-105 hover:shadow-md'>
        Download my CV
        <GrDocumentDownload className='dark:bg-gray-300' />
      </button>
    </a>
  );
};
