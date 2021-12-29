import MDXComponents from 'components/MDXComponents';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from 'services/getPosts';

type Post = {
  source: MDXRemoteSerializeResult;
  frontMatter: { title: string };
};

export default function Post({
  post: { source, frontMatter },
}: {
  post: Post;
}) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} components={MDXComponents} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const posts = await getFiles('posts');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const post = await getFileBySlug('posts', String(params.slug));
    return { props: { post } };
  }

  return { props: {} };
};
