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
        <button className={cx('px-6 py-3 rounded-md bg-accent text-light font-medium text-xs',className)}>{title}</button>
      </a>
    );
  }

  return (
    <Link href={link}>
        <button className={cx('px-6 py-3 rounded-md bg-accent text-light font-semibold text-xs',className)}>{title}</button>
    </Link>
  )
}

export default Button
