import { NextSeo, NextSeoProps } from 'next-seo';

interface SEOProps extends NextSeoProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, ...props }) => {
  const pageTitle = title ? `${title} | FerreiraCode` : 'FerreiraCode';

  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/images/${image}`
    : '';

  return (
    <NextSeo
      defaultTitle="FerreiraCode"
      title={pageTitle}
      description={description}
      canonical="https://ferreiracode.com"
      openGraph={{
        url: 'https://ferreiracode.com',
        title: pageTitle,
        description,
        locale: 'en_IE',
        type: 'website',
        images: [
          {
            url: `${pageImage}`,
            width: 1200,
            height: 620,
            alt: 'Thumbnail',
            type: 'image/png',
          },
        ],
        site_name: pageTitle,
      }}
      twitter={{
        handle: '@ferreiracoder',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        { httpEquiv: 'x-ua-compatible', content: 'IE=edge,chrome=1' },
        { name: 'google', content: 'notranslate' },
        { name: 'robots', content: 'index,follow' },
        { name: 'MobileOptimized', content: '320' },
        { name: 'HandheldFriendly', content: 'True' },
        { name: 'theme-color', content: '#212123' },
        { name: 'referer', content: 'no-referrer-when-downgrade' },
        { name: 'image', content: `${pageImage}` },
      ]}
      {...props}
    />
  );
};

export default SEO;
