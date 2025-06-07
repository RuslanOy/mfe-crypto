import React from "react";
import { useAccount } from "wagmi";
import { Account } from "../Account";
import { WalletOptions } from "../Wallet";

export const ConnectWallet = (): React.ReactElement => {
    const { isConnected } = useAccount();
    if (isConnected) return <Account />;
    return <WalletOptions />;
  };