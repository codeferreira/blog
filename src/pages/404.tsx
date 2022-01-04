import { Container, Heading } from '@chakra-ui/react';

export default function Custom404() {
  return (
    <Container
      display="flex"
      minH="60vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Heading as="h1" textAlign="center" fontSize="7xl">
        Page Not
        <br />
        Found
      </Heading>
    </Container>
  );
}
