import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 py-8 flex flex-wrap justify-evenly">
        <Link to="/">
          <p className=" text-xl font-bold tracking-wide text-gray-100 uppercase">
            Grand Show © {new Date().getFullYear()}
          </p>
        </Link>
        <a
          className=" text-xl  tracking-wide text-gray-100 "
          href="https://www.yassermahmoud.com"
          target="_blank"
          rel="noreferrer"
        >
          Built by{" "}
          <span className="text-gray-300 underline">Yasser Mahmoud</span>
        </a>

        <a
          className=" text-xl  tracking-wide text-gray-100 "
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
        >
          Powered by{" "}
          <span className="text-gray-300 underline">The Movie Database</span>
        </a>
      </footer>
    </>
  )
}

export default Footer
