import { Box, Button, Center, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { getAllFilesFrontMatter } from 'services/getPosts';
import Post from 'components/Post';

type Post = {
  title: string;
  description: string;
  published: boolean;
  author: string;
  timestamp: string;
  slug: string;
};

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const [slice, setSlice] = useState(11);
  const filteredPosts = useMemo(() => posts.slice(0, slice), [posts, slice]);

  return (
    <>
      <Box mt="8">
        {filteredPosts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </Box>
      {posts.length > slice && (
        <Center>
          <Button
            onClick={() => setSlice((state) => state + 10)}
            colorScheme="purple"
          >
            Load more
          </Button>
        </Center>
      )}
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } };
}

export default Home;
