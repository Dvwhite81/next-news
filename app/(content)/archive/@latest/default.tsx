import NewsList from '@/components/news-list';
import { getLatestNews } from '@/lib/news';
import { NewsItemType } from '@/lib/types';

export default async function LatestNewsPage() {
  const news = (await getLatestNews()) as NewsItemType[];

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
}
