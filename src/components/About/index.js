import React, { useState, useEffect } from 'react';
import { Image, Grid, GridItem, Box } from '@chakra-ui/react';
import Iframe from 'react-iframe';

const About = () => {
  const [link, setLink] = useState('');

  useEffect(() => {
    setLink(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861.7685620584942!2d22.07805799730191!3d48.224763111103755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738ecfb0193a8c5%3A0xd8b1448678038952!2zS2lzdsOhcmRhLCBTemVudCBMw6FzemzDsyB1LiAyMiwgNDYwMA!5e0!3m2!1shu!2shu!4v1585865250985!5m2!1shu!2shu'
    );
  }, []);

  return (
    <Box p={{ base: '2', md: '8' }}>
      <Grid templateColumns="repeat(2, 1fr)" gap="8">
        <GridItem colSpan={[2, 2, 1]} px={{ base: 4, md: 16 }}>
          <Box rounded="lg" border="2px solid gray.300">
            <Image src="/images/bolt.JPG" rounded="lg" />
          </Box>
        </GridItem>
        <GridItem colSpan={[2, 2, 1]} p={{ base: 2, md: 8 }}>
          <Iframe url={link} width="100%" height="100%" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
