import React from 'react';
import { Box, Heading, Text, Container } from '@chakra-ui/react';
import UserCard from '../components/user-card';

const Inicio = () => {
  return (
    <Container maxW='container.xl'>
      <Box textAlign="center" py={10} px={6} width='100%'>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          ¡Bienvenido,
          <Text as={'span'} color={'blue.400'}>
            &nbsp;Admin Administrador!
          </Text>
        </Heading>
        <UserCard />
      </Box>
    </Container>
  );
}

export default Inicio;