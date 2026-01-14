'use client';

import { useMemo } from 'react';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import ClientOnly from '@/src/components/features/ClientOnly';
import { Button } from '@/src/components/ui/button';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = useMemo(() => resolvedTheme === 'dark', [resolvedTheme]);

  return (
    <ClientOnly>
      <Button
        className="rounded-full"
        size="icon"
        variant="outline"
        onClick={() => {
          setTheme(isDark ? 'light' : 'dark');
        }}
      >
        {isDark ? <Sun /> : <Moon />}
      </Button>
    </ClientOnly>
  );
}
