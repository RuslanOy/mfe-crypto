import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className }: Props) => {
  const darkStyles = 'dark:bg-white dark:text-black hover:bg-white/80';
  const lightStyles = 'bg-black text-white hover:bg-black/80';
  return (
    <button
      className={`px-4 py-2 rounded-sm cursor-pointer ${darkStyles} ${lightStyles} ${
        className || ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
