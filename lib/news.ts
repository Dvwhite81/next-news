import sql from 'better-sqlite3';

const db = sql('data.db');

export async function getAllNews() {
  const news = db.prepare('SELECT * FROM news').all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsItem(slug: string) {
  const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export async function getLatestNews() {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

type NewsYear = {
  year: string;
};

export async function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as NewsYear[];

  const mappedYears = years.map((year) => year.year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return mappedYears;
}

type NewsMonth = {
  month: string;
};

export function getAvailableNewsMonths(year: string | number) {
  const months = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?",
    )
    .all(year) as NewsMonth[];

  const mappedMonths = months.map((month) => month.month);
  return mappedMonths;
}

export async function getNewsForYear(year: string | number) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC",
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(
  year: string | number,
  month: string | number,
) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC",
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}
