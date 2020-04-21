import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, meta, title, keywords, image, path }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
            social {
              twitter
            }
            icon
            defaultImage
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  // map and flatten
  const seoKeywords = keywords + site.siteMetadata.keywords;
  const url = site.siteMetadata.siteUrl + path;
  const fallbackImage =
    site.siteMetadata.siteUrl + site.siteMetadata.defaultImage;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `keywords`, content: seoKeywords },
        { name: 'viewport', content: 'initial-scale=1.0, width=device-width' },
        { property: 'og:url', content: url },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { property: `og:image`, content: image || fallbackImage },
        /* { property: `og:image:alt`, content: image.alt }, */
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:site`, content: site.siteMetadata.social.twitter },
        { name: 'twitter:domain', content: url },
        { name: `twitter:image`, content: image || fallbackImage },
        /* { name: `twitter:image:alt`, content: image.alt }, */
        { name: `twitter:creator`, content: site.siteMetadata.author },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription }
      ].concat(meta)}
    >
      <link rel="shortcut icon" href={site.siteMetadata.icon} />
    </Helmet>
  );
}

SEO.defaultProps = {
  meta: [],
  description: ``,
  path: ``,
  keywords: [],
  image: null
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string
};

export default SEO;
