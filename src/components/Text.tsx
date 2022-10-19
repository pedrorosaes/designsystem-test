import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export const Text = ({ size = 'md', children, asChild }: TextProps) => {
  const Compo = asChild ? Slot : 'span'
  return <Compo className={clsx('text-gray-100 font-sans',
    {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg',
    }
  )}
  >
    {children}
  </Compo>
}