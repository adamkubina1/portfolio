import { PageHeading } from '@/components/generic/typography/pageHeading';
import { PageWrapper } from '@/components/layouts/pageWrapper';
import { LatestArticles } from '@/components/pageSpecific/blog/blogPosts/latestArticles';
import { WritingInfo } from '@/components/pageSpecific/blog/writingInfo/writingInfo';

export default function Blog() {
  return (
    <PageWrapper
      direction={'both'}
      leftHref={'/projects'}
      rightHref={'/contact'}
      title='Blog'
    >
      <PageHeading heading='BLOG' />
      <WritingInfo />
      <LatestArticles />
    </PageWrapper>
  );
}
