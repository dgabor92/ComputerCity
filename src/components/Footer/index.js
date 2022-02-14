import {
  Button,
  IconButton,
  Box,
  Text,
  Link,
  useColorModeValue as mode,
  Grid,
  GridItem,
  ButtonGroup,
  Icon,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { FaFacebook } from 'react-icons/fa';
import * as React from 'react';

export const Footer = () => (
  <Box bg={mode('rgb(73,76,85)', 'blue.900')}>
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      py="2rem"
      color="white"
      // maxW="7xl"
      // px={{ base: '4', md: '8' }}
    >
      <Box maxW="full">
        <Grid gap={{ base: '2', lg: '12' }} templateColumns="repeat(3,1fr)">
          <GridItem colSpan={[3, 2, 2]} textAlign="center">
            <Text fontSize="xl" fontWeight="bold">
              ComputerCity Számítástechnikai Szaküzlet és szerviz
            </Text>
            <Text>
              4600 Kisvárda Átrium Üzletház Szent László utca 22. Fsz. 3.
            </Text>

            <Box>
              <Icon as={PhoneIcon} mr="2" width="4" height="4" />
              <Link href="tel:+36702630201">Tel.: +36702630201</Link>
            </Box>
            <Box>
              <Icon as={EmailIcon} mr="2" width="4" height="4" />
              <Link href="mailto:computercitykisvarda@gmail.com">
                computercitykisvarda@gmail.com
              </Link>
            </Box>
            <ButtonGroup variant="ghost" colorScheme="white">
              <IconButton
                as="a"
                href="https://www.facebook.com/computercitykisvarda"
                aria-label="Facebook"
                icon={<FaFacebook fontSize="30px" />}
              />
            </ButtonGroup>
          </GridItem>
          <GridItem
            colSpan={[3, 1, 1]}
            textAlign="center"
            pt={{ base: '4', md: '8' }}
          >
            <Button colorScheme="cyan">Időpont foglalás</Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  </Box>
);
