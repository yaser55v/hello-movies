import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
const TopTv = () => {
  const data = useStaticQuery(query)
  const topTV = data.allTmdbTvTopRated.nodes
  return (
    <div className="animate-lazy">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {topTV.map(topv => {
            const {
              id,
              tmdbId,
              name,
              vote_average,
              poster_path: { w780 },
            } = topv
            return (
              <div key={id} className="group relative">
                <div className="w-full h-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                  <img
                    src={w780}
                    alt={name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full animate-lazy"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/${tmdbId}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{name}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-100">
                    {vote_average}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TopTv
const query = graphql`
  {
    allTmdbTvTopRated(limit: 20) {
      nodes {
        id
        tmdbId
        name
        vote_average
        poster_path {
          w780
        }
      }
    }
  }
`
