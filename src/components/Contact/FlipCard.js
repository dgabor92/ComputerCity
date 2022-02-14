import React from 'react';
import { Box, Text, useColorModeValue, Image } from '@chakra-ui/react';

const FlipCard = (props) => {
  return (
    <Box
      as="dl"
      bg={useColorModeValue('gray.400', 'rgb(26,54,93)')}
      p="2"
      rounded="lg"
    >
      <Image src={props.src} />
    </Box>
  );
};

export default FlipCard;
