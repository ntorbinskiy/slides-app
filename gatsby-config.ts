import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-no-javascript-utils",
      options: {
        noScript: true,
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeHeadDataAttrs: true,
        noInlineStyles: false,
        removeGatsbyAnnouncer: false,
      },
    },
  ],
};

export default config;
