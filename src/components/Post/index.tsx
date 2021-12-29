import { Box, Heading, Text, Link, Button } from '@chakra-ui/react';
import { useMemo } from 'react';
import NextLink from 'next/link';
import dayjs from 'dayjs';

type Post = {
  title: string;
  description: string;
  published: boolean;
  author: string;
  timestamp: string;
  slug: string;
};

export default function Post({ post }: { post: Post }) {
  const parsedDate = useMemo(() => {
    const date = new Date(post.timestamp);
    return dayjs(date).format('MMMM DD, YYYY');
  }, [post]);

  return (
    <Link as={NextLink} href={`/blog/${post.slug}`} cursor="pointer">
      <Box cursor="pointer" mb={9}>
        <Heading as="h2" fontSize="2xl" mb={2}>
          {post.title}
        </Heading>
        <Text mb={3}>{post.description}</Text>
        <Text as="span" display="block" mb={4}>
          {parsedDate}
        </Text>
        <Button as="a" variant="link" colorScheme="purple">
          Read more...
        </Button>
      </Box>
    </Link>
  );
}
