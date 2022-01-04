import { Code, Heading, Link, Text } from '@chakra-ui/react';

const MDXComponents: Record<string, React.ReactNode> = {
  h1: (props: unknown) => <Heading as="h1" {...props} />,
  h2: (props: unknown) => <Heading as="h2" {...props} />,
  inlineCode: (props: unknown) => (
    <Code colorScheme="purple" fontSize="0.95em" {...props} />
  ),
  p: (props: unknown) => (
    <Text my={5} fontSize="1em" lineHeight="base" {...props} />
  ),
  strong: (props: unknown) => (
    <Text
      as="strong"
      fontSize="1em"
      lineHeight="base"
      color="#6767C2"
      {...props}
    />
  ),
  a: (props: unknown) => <Link isExternal color="#6767C2" {...props} />,
};

export default MDXComponents;
