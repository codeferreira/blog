import MDXComponents from 'components/MDXComponents';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from 'services/getPosts';

type About = {
  source: MDXRemoteSerializeResult;
  frontMatter: { title: string };
};

export default function About({
  about: { source, frontMatter },
}: {
  about: About;
}) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} components={MDXComponents} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const about = await getFileBySlug('others', 'about');
  return { props: { about } };
};
