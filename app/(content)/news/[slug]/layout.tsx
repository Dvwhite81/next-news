import { ReactNode } from 'react';

export default function NewsDetailLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
