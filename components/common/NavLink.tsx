'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathName = usePathname();
  const isActive =
    pathName === href || (href !== '/' && pathName.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        'transition-colors text-sm duration-200 text-gray-700 hover:text-rose-500',
        className,
        isActive && 'text-red-500'
      )}
    >
      {children}
    </Link>
  );
}
