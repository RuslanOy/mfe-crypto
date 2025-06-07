import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { useConnect } from 'wagmi';

export const WalletOptions = (): React.ReactElement => {
  const { connectors, connect } = useConnect();

  return (
    <Flex gap="4" flexDirection="column" maxWidth="700px">
      {connectors.map((connector) => (
        <Button key={connector.uid} onClick={() => connect({ connector })}>
          {connector.name}
        </Button>
      ))}
    </Flex>
  );
};
