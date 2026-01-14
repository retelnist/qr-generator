'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavigationMenuItem } from '@/src/components/ui/navigation-menu';

export default function MenuLinks() {
  const pathname = usePathname();

  return (
    <>
      <NavigationMenuItem>
        <Link
          className={clsx(
            'hover:text-primary font-medium',
            pathname.startsWith('/') && 'text-primary font-semibold',
          )}
          href="/"
        >
          QR
        </Link>
      </NavigationMenuItem>
    </>
  );
}
