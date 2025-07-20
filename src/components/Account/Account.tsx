'use client';
import React from 'react';
import { useAccount } from 'wagmi';

export const Account = () => {
  const { connector, isConnected, status } = useAccount();
  return (
    <div className="flex flex-col gap-2">
      {isConnected ? (
        <>
          <p className="text-lg">Status: {status}</p>
          <p className="text-lg">Connected with: {connector?.name}</p>
        </>
      ) : (
        <p className="text-lg">Connect your wallet to continue</p>
      )}
    </div>
  );
};
