import {
  Flex,
  Text,
  Image,
  Spacer,
  Container,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { Footer } from '../Footer';

const Layout = (props) => {
  const globalWidth = '9xl';
  return (
    <Flex direction="column" bg={mode('rgb(78,105,137)', 'gray.800')}>
      <Flex
        align="center"
        bg={mode('rgb(73,76,85)', 'blue.900')}
        color="white"
        px="6"
        minH="16"
      >
        <Flex justify="space-between" align="center" w="full">
          <Flex alignItems="" pr={1}>
            <Image
              src="/images/removedlogo2.png"
              width={{ base: '16', md: '44' }}
              height={{ base: '16', md: '24' }}
            />
          </Flex>
          <Flex flexDir="column" textAlign="center">
            <Text>Nyitvatartás</Text>
            <Text>Hétfő-Péntek: 9:00-17:00</Text>
            <Text>Szombat: 9:00-12:30</Text>
          </Flex>
        </Flex>
      </Flex>
      <Container
        p="0"
        minH="75vh"
        maxW={globalWidth}
        backgroundColor={mode('gray.300', 'gray.400')}
      >
        {props.children}
      </Container>
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Layout;
