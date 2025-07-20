'use client';
import React from 'react';
import { useConnect } from 'wagmi';
import { Dropdown, Button } from '@/shared/ui';

export const Connect = () => {
  const { connectors, connect } = useConnect();

  return (
    <Dropdown title="Connect wallet">
      {connectors.map((connector) => (
        <Button
          key={connector.uid}
          onClick={() => {
            connect({ connector });
          }}
          className="w-full text-left px-4 py-2 text-black dark:text-black hover:bg-gray-100 dark:hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors"
        >
          {connector.name}
        </Button>
      ))}
    </Dropdown>
  );
};
