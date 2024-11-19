/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';

export default function ImagePage({ params }: { params: { slug: string } }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
