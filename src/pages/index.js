import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Pipeline cafe</title>
      <h1 style={headingStyles}>
        Hello, Pipeline's members~
      </h1>

      <section>
        Cafe List
      </section>
    </main>
  )
}

export default IndexPage
