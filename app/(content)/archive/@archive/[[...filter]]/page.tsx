import Link from 'next/link';
import { Suspense } from 'react';

import NewsList from '@/components/news-list';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import { NewsItemType } from '@/lib/types';

type FilteredNewsProps = {
  year?: string;
  month?: string;
};

async function FilterHeader({ year, month }: FilteredNewsProps) {
  const availableYears = (await getAvailableNewsYears()) as string[];
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (year &&
      month &&
      !(getAvailableNewsMonths(year) as string[]).includes(month))
  ) {
    throw new Error('Invalid filter.');
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }: FilteredNewsProps) {
  let news: NewsItemType[] = [];

  if (year && !month) {
    news = (await getNewsForYear(year)) as NewsItemType[];
  } else if (year && month) {
    news = (await getNewsForYearAndMonth(year, month)) as NewsItemType[];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({
  params,
}: {
  params: { filter: string };
}) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  console.log('filter:', filter);

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
