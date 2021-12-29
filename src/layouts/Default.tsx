import {
  Box,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      as="main"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minH="100vh"
    >
      <Box>
        <Box as="header" py={3}>
          <Container
            as="nav"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            maxW="5xl"
          >
            <Link as={NextLink} href="/" cursor="pointer">
              <Heading cursor="pointer">
                <Image src="/logo.svg" width="120" height="60" />
              </Heading>
            </Link>
            <Link as={NextLink} colorScheme="purple" href="/about">
              About
            </Link>
          </Container>
        </Box>
        <Container maxW="4xl">{children}</Container>
      </Box>
      <Box bg="gray.100">
        <Box
          maxW="5xl"
          as="footer"
          role="contentinfo"
          mx="auto"
          py="12"
          px={{ base: '4', md: '8' }}
        >
          <Stack>
            <Stack
              direction="row"
              spacing="5"
              align="center"
              justify="space-between"
            >
              <Image src="/logo.svg" width="100" height="50" />
              <ButtonGroup variant="ghost" color="gray.600">
                <IconButton
                  as="a"
                  href="#"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="20px" />}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="GitHub"
                  icon={<FaGithub fontSize="20px" />}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter fontSize="20px" />}
                />
              </ButtonGroup>
            </Stack>
            <Text fontSize="sm" alignSelf={{ base: 'center', sm: 'start' }}>
              &copy; {new Date().getFullYear()} FerreiraCode. All rights
              reserved.
            </Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
