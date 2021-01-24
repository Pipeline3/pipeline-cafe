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

      <section>
        Recommend Cafe List
      </section>

      <section>
        To do List
        - 연말에 가기 좋은 카페
        - 개발자가 추천하는 카페
        - 루프탑 이 있는 카페
        - 뷰가 좋은 카페
        - 해돋이 볼수 있는 카페
        - 인생샷 카페
        - 북카페(북스테이)
        - 산책길 있는 카페
        - 애완견 출입가능한 카페
        - 낮 카페 밤 펍
        - 디저트가 맛있는 카페
        - 브런치 하는 카페
        - 그림그리기 좋은 카페
      </section>
    </main>
  )
}

export default IndexPage
