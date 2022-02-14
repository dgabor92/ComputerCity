import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { QuoteIcon } from './QuoteIcon';

const Testimonials = () => {
  const [iterate, setIterate] = useState(0);

  const options = [
    'Meg vagyok elégedve a szolgáltatásukkal. Pontos, gyors és alapos munkát végeznek.',
    'Mikor más azt mondja nem lehet megjavítani, Önök megmutatjátok, hogy meglehet.',
    'Köszönöm szépen azt a sok segítséget és tájékoztatást, amit Önöktől kaptam.',
  ];

  const options_2 = [
    'Bármikor mentem, mindig tárt karokkal fogadjátok az embereket. Lenyűgöző mennyire fontos számotokra a vevői elégedettség.',
    'Nagyon sok szeretet és odafigyelés árad belőletek.',
    'Imádom ezt a megoldás-centrikus megközelítést amit alkalmaztok minden ügyfélnél.',
  ];

  useEffect(() => {
    if (iterate === 0) {
      setTimeout(() => {
        setIterate(iterate + 1);
      }, 15000);
    }
    if (iterate === 1) {
      setTimeout(() => {
        setIterate(iterate + 1);
      }, 15000);
    }
    if (iterate === 2) {
      setTimeout(() => {
        setIterate(0);
      }, 15000);
    }
  }, [iterate]);

  return (
    <Grid templateColumns="repeat(2,1fr)">
      <GridItem colSpan={[2, 2, 1]}>
        <Box as="section">
          <Box
            maxW="3xl"
            mx="auto"
            px={{ base: '6', md: '8' }}
            pt="2"
            pb={{ base: '16', md: '4' }}
          >
            <Flex direction="column" align="center" textAlign="center">
              <QuoteIcon
                color={useColorModeValue('rgb(96,125,139)', 'gray.600')}
                fontSize={{ base: '3xl', md: '6xl' }}
              />
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="medium"
                minH={32}
                mt="6"
              >
                {options[iterate]}
              </Text>
            </Flex>
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={[2, 2, 1]}>
        <Box as="section">
          <Box
            maxW="3xl"
            mx="auto"
            px={{ base: '6', md: '8' }}
            pt="2"
            pb={{ base: '16', md: '4' }}
          >
            <Flex direction="column" align="center" textAlign="center">
              <QuoteIcon
                color={useColorModeValue('rgb(78,105,136)', 'gray.600')}
                fontSize={{ base: '3xl', md: '6xl' }}
              />
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="medium"
                mt="6"
                minH={32}
              >
                {options_2[iterate]}
              </Text>
            </Flex>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Testimonials;
