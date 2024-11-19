import Link from 'next/link';

import { NewsItemType } from '@/lib/types';

type NewsListProps = {
  news: NewsItemType[];
};

export default function NewsList({ news }: NewsListProps) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
