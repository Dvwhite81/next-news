import NewsList from '@/components/news-list';
import { getAllNews } from '@/lib/news';
import { NewsItemType } from '@/lib/types';

export default async function NewsPage() {
  const news = (await getAllNews()) as NewsItemType[];

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
