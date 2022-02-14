import React from 'react';
import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import {
  FcTreeStructure,
  FcMultipleDevices,
  FcHighPriority,
  FcGlobe,
  FcSupport,
  FcPrivacy,
} from 'react-icons/fc';
import PropertyField from './PropertyField';

const Features = () => {
  return (
    <>
      <Box bg="rgb(73,76,85)" pt="4" pb="5">
        <Box
          maxW={{ base: 'md', md: '5xl' }}
          mx="auto"
          px={{ base: '4', md: '6' }}
        >
          <Box textAlign={'center'} pt="2" pb="4" color="white">
            <Heading size="xl" lineHeight="normal" textAlign="center">
              Szolgáltatásaink
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box as="section" maxW="6xl" mx="auto" py="12" px={{ base: 6, md: 8 }}>
        <SimpleGrid
          columns={{ base: '1', md: '3' }}
          spacingX="10"
          spacingY={{ base: '8', md: '14' }}
        >
          <PropertyField title="Biztonság" icon={<FcPrivacy />}>
            Biztonságtechnikai eszközök és kiegészítők forgalmazása és
            telepítése
          </PropertyField>
          <PropertyField title="GPS" icon={<FcGlobe />}>
            GPS forgalmazása, beüzemelése és javítása
          </PropertyField>
          <PropertyField title="Hálózat" icon={<FcTreeStructure />}>
            Hálózatépítés, Weblapkészítés
          </PropertyField>
          <PropertyField title="Számítógépek" icon={<FcMultipleDevices />}>
            Asztali számítógépek, Notebookok forgalmazása
          </PropertyField>
          <PropertyField title="Számítógépek" icon={<FcSupport />}>
            Asztali számítógépek, Notebookok beüzemelése, karbantartása,
            javítása
          </PropertyField>
          <PropertyField title="Hibafeltárás" icon={<FcHighPriority />}>
            Hibafeltárás, Szakvélemények kiállítása
          </PropertyField>
        </SimpleGrid>
      </Box>
    </>
  );
};
export default Features;
