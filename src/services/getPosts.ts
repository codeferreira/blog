import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
//@ts-ignore
import mdxPrism from 'mdx-prism';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
// @ts-ignore
import remarkCodeTitles from 'remark-code-titles';

type Post = {};

const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'src', 'content', type));
}

export async function getFileBySlug(type: string, slug: string) {
  const initialSource = slug
    ? fs.readFileSync(
        path.join(root, 'src', 'content', type, `${slug}.mdx`),
        'utf8',
      )
    : fs.readFileSync(path.join(root, 'src', 'content', `${type}.mdx`), 'utf8');

  const { data, content } = matter(initialSource);
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkAutolinkHeadings, remarkSlug, remarkCodeTitles],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    source,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'src', 'content', type));

  const posts = files.reduce((allPosts: Post[], postSlug: string) => {
    const source = fs.readFileSync(
      path.join(root, 'src', 'content', type, postSlug),
      'utf8',
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);

  return posts;
}
