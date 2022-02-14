import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Card = (props) => {
  return (
    <Box
      as="dl"
      bg={useColorModeValue('rgb(96,125,139)', 'rgb(26,54,93)')}
      p="2"
      rounded="lg"
    >
      {/* <Text
        as="dt"
        fontSize="xl"
        lineHeight="normal"
        fontWeight="bold"
        pt="2"
        pb="2"
      >
        {props.title}
      </Text>
      <Text as="dd" fontSize={'xl'} lineHeight={1} my="4" textAlign={'center'}>
        {props.value}
      </Text> */}
      {props.children}
    </Box>
  );
};

export default Card;
