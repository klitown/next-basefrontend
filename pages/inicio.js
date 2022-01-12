import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Inicio = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      {/* <CheckCircleIcon boxSize={'50px'} color={'green.500'} /> */}
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        ¡Bienvenido,
        <Text as={'span'} color={'blue.400'}>
          &nbsp;Admin Administrador!
        </Text>
      </Heading>
      <Text color={'gray.500'} mt="10">
        ¡Hola!
      </Text>
    </Box>
  );
}

export default Inicio;