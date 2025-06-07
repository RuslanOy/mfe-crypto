import { ConnectWallet } from '@/entities/ConnectWallet';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const App = (): React.ReactElement => {
  return (
    <Flex direction="column" gap="4">
      <Text>Crypto</Text>
      <ConnectWallet />
    </Flex>
  );
};

export default App;
