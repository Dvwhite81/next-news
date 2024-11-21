/* eslint-disable @next/next/no-img-element */
import { getNewsItem } from '@/lib/news';
import { NewsItemType } from '@/lib/types';
import { notFound } from 'next/navigation';

export default async function ImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const newsItem = (await getNewsItem(slug)) as NewsItemType;

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
