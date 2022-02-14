import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const PropertyField = (props) => {
  const { title, children, icon } = props;

  return (
    <Stack
      spacing={{ base: 3, md: 6 }}
      direction={{ base: 'column', md: 'row' }}
      textAlign="center"
    >
      <Box fontSize="6xl" margin="0 auto">
        {icon}
      </Box>
      <Stack spacing="1">
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Box>{children}</Box>
      </Stack>
    </Stack>
  );
};

export default PropertyField;
