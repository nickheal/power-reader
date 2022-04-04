import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: `/power-reader`,
  siteMetadata: {
    title: `new`,
    siteUrl: `https://nickheal.github.com/power-reader`
  },
  plugins: ["gatsby-plugin-jss", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: "gatsby-plugin-manifest",
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};

export default config;
