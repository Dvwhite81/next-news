/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsItem } from '@/lib/news';
import { NewsItemType } from '@/lib/types';

export default async function NewsDetailPage({
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
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
