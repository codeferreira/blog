import MDXComponents from 'components/MDXComponents';
import SEO from 'components/SEO';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';
import { getFileBySlug, getFiles } from 'services/getPosts';

type Post = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    description: string;
    headerImage: string;
    publishedAt: string;
  };
};

export default function Post({
  post: { source, frontMatter },
}: {
  post: Post;
}) {
  const { query } = useRouter();
  const slug = query.slug as string;

  return (
    <>
      <SEO title={frontMatter.title} description={frontMatter.description} />
      <ArticleJsonLd
        url={`https://ferreiracode.com/blog/${slug}`}
        title={frontMatter.title}
        images={[frontMatter.headerImage]}
        datePublished={new Date(frontMatter.publishedAt).toISOString()}
        authorName="Joe Ferreira"
        publisherName="FerreiraCode"
        publisherLogo="https://ferreiracode.com/images/logo.svg"
        description={frontMatter.description}
      />
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} components={MDXComponents} />
    </>
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
