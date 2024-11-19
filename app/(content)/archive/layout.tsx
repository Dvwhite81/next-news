import { ReactNode } from 'react';

export default function ArchiveLayout({
  archive,
  latest,
}: {
  archive: ReactNode;
  latest: ReactNode;
}) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
