import React from 'react';
import { Account } from '@pages/Account';
import { Wallet } from '@/features';

export const Home = () => {
  return (
    <div className="flex flex-col h-screen items-center gap-9 p-4 sm:p-6 w-full">
      <div className="flex flex-col sm:flex-row items-center w-full sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">Crypto dashboard</h1>
        <Wallet />
      </div>
      <Account />
    </div>
  );
};
