import { Code, Heading } from '@chakra-ui/react';

const MDXComponents: Record<string, React.ReactNode> = {
  h1: (props: any) => <Heading as="h1" {...props} />,
  inlineCode: (props: any) => (
    <Code colorScheme="purple" fontSize="0.84em" {...props} />
  ),
};

export default MDXComponents;
