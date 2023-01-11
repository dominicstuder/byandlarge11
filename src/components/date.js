import React from "react"
import { graphql, useStaticQuery } from "gatsby"



function tick() {
const Date = () => {
  const data = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  return (
    <h2 className="clock">{data.currentBuildDate.currentDate}</h2>
  )
}

setInterval(tick, 1000);
}

export default Date