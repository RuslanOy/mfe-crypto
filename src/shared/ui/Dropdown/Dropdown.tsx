import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Dropdown = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="!bg-white !text-black hover:!bg-gray-100 dark:!bg-white dark:!text-black dark:hover:!bg-gray-100 flex items-center justify-between gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-300"
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-white border border-gray-300 dark:border-gray-300 rounded-lg shadow-lg z-10">
          {children}
        </div>
      )}
    </div>
  );
};
