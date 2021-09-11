require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    title: `Grand Show`,
    description: `Gatsby project with data from The Movie Database - https://www.themoviedb.org/`,
    author: `Yasser Mahmoud`,
    siteUrl: `https://www.themoviedb.org/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-tmdb",
      options: {
        apiKey: process.env.API_KEY,
        sessionID: process.env.SESSION_ID,
        endpoints: [
          {
            url: `movie/popular`,
            countLimit: 20,
          },
          {
            url: `movie/top_rated`,
            countLimit: 20,
          },
          {
            url: `tv/popular`,
            countLimit: 20,
          },
          {
            url: `tv/top_rated`,
            countLimit: 20,
          },
        ],
      },
    },
  ],
}
