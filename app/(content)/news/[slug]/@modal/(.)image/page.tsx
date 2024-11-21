/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation';

import ModalBackdrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';
import { NewsItemType } from '@/lib/types';

export default async function InterceptedImagePage({
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
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
