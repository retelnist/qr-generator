import { ReactNode } from 'react';

import Header from '@/src/components/Header';

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex min-h-lvh flex-col">
      <Header />
      <main className="container mx-auto my-10 flex-1 lg:my-20">{children}</main>
      <footer>Footer</footer>
    </section>
  );
}
