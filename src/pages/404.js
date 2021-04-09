import React from "react"
import Button from "../components/Button"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Bg from "../assets/bg404.svg"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container-inner px-4 py-14 xl:pt-220px xl:pb-130px relative not-found lg:mt-20 lg:mb-32">
      <h1 className="text-4xl lg:text-hero-h1 pb-10 tracking-widest text-center lg:mt-28">
        404
      </h1>
      <h2 className="green-line green-line-center st-h2 text-center">
        Page not found
      </h2>
      <p className="text-center mb-16">
        The page you are looking for could have been deleted or never existed.
      </p>
      <Button text="Go Back Home" to="/" />
      <div className="not-found-svg-container">
        <Bg />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
