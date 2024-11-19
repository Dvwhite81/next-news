/* eslint-disable @next/next/no-img-element */
'use client';

import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';

import { DUMMY_NEWS } from '@/dummy-news';

export default function NewsDetailPage() {
  const { slug } = useParams();
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </Link>
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
}