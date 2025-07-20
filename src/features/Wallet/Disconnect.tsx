'use client';
import { Button } from '@shared/ui';
import React from 'react';
import { useDisconnect } from 'wagmi';

export const Disconnect = () => {
  const { disconnect } = useDisconnect();
  return <Button onClick={() => disconnect()}>Disconnect Wallet</Button>;
};
