require("dotenv").config({
  path: ".env",
})

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
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
          },
          {
            url: `movie/top_rated`,
          },
          {
            url: `tv/popular`,
          },
          {
            url: `tv/top_rated`,
          },
        ],
      },
    },
  ],
}
