/* eslint-disable @next/next/no-img-element */
'use client';

import { notFound, useParams } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';

export default function ImagePage() {
  const { slug } = useParams();
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
