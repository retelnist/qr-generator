import { ReactNode } from 'react';

import BaseLayout from '@/src/layouts/BaseLayout';

export default function Layout({ children }: { children: ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
