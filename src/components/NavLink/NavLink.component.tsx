'use client';
import React, {
  ComponentPropsWithoutRef,
  ElementType,
  useCallback,
} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarOpenAtom } from '@/atoms';
import { useAtom } from 'jotai';

const DEFAULT_TYPE = Link;

type Props<T extends ElementType> = {
  As?: T;
  children?: React.ReactNode;
  externalLink?: boolean;
  onClick?: () => void;
} & ComponentPropsWithoutRef<T>;

function NavLink<T extends ElementType = typeof DEFAULT_TYPE>({
  As,
  href = '/',
  exact = true,
  children,
  externalLink = false,
  onClick,
  ...props
}: Props<T>) {
  const Component = As ?? DEFAULT_TYPE;

  const [, toggleNavbar] = useAtom(navbarOpenAtom);

  const onClickHandler = useCallback(() => {
    if (onClick) {
      onClick();
    }
    toggleNavbar(false);
  }, [onClick, toggleNavbar]);

  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (externalLink) {
    return (
      <Component href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </Component>
    );
  }

  return (
    <Component href={href} onClick={onClickHandler} {...props}>
      {children}
    </Component>
  );
}

export default NavLink;
