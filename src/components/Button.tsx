import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({ size = 'md', children, asChild }: ButtonProps) => {
  const Compo = asChild ? Slot : 'button'
  return (
    <Compo className={clsx(
      'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
    )}
    >
      {children}
    </Compo>
  )
}