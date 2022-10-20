import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export const Heading = ({ size = 'md', children, asChild }: HeadingProps) => {
  const Compo = asChild ? Slot : 'h1'
  return <Compo className={clsx('text-gray-100 font-sans',
    {
      'text-lg': size === 'sm',
      'text-xl': size === 'md',
      'text-2xl': size === 'lg',
    }
  )}
  >
    {children}
  </Compo>
}