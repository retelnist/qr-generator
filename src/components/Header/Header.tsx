import { Menu, Package2 } from 'lucide-react';
import Link from 'next/link';

import ThemeToggle from '@/src/components/features/toggles/ThemeToggle';
import { Button } from '@/src/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/src/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet';

import MenuLinks from './MenuLinks';

export default function Header() {
  return (
    <header className="bg-background neon-box sticky top-0 z-50 flex h-16 w-full items-center justify-between px-4 md:px-6">
      <div className="container mx-auto flex w-full items-center justify-between gap-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Package2 className="h-6 w-6" />
          <span>QR Generator</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-4">
            <MenuLinks />
            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetTitle hidden>menu</SheetTitle>
          <SheetContent className="gap-1" side="left">
            <SheetHeader>
              <SheetDescription>
                <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
                  <Package2 className="h-6 w-6" />
                  <span>QR Generator</span>
                </Link>
              </SheetDescription>
            </SheetHeader>

            <div className="neon-separator mb-6" />
            <nav className="grid gap-6 px-4 text-lg font-medium">
              <Link className="hover:text-foreground" href="/projects">
                Projects
              </Link>
            </nav>

            <SheetFooter>
              <ThemeToggle />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
