'use client';
import React from 'react';
import { Connect } from './Connect';
import { Disconnect } from './Disconnect';
import { useAccount } from 'wagmi';

export const Wallet = () => {
  const { isConnected } = useAccount();
  return <>{isConnected ? <Disconnect /> : <Connect />}</>;
};
