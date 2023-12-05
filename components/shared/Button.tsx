import { cx } from '@/utils'
import Link from 'next/link';
import React from 'react'

interface ButtonProps {
  title: string;
  link: string;
  className?: string;
  external?: boolean;
}

const Button = ({ title, link, className, external }: ButtonProps) => {
  if (external) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className={cx('px-4 md:px-6 py-3 rounded-md whitespace-nowrap bg-accent text-white font-bold text-sm border-2 border-transparent transition-all duration-200 ease-in-out',className)}>{title}</button>
      </a>
    );
  }

  return (
    <Link href={link}>
        <button className={cx('px-4 md:px-6 py-3 rounded-md whitespace-nowrap bg-accent text-white font-bold text-sm border-2 border-transparent transition-all duration-200 ease-in-out',className)}>{title}</button>
    </Link>
  )
}

export default Button
