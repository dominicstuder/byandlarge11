import React from "react"

import { StaticImage } from "gatsby-plugin-image"

export function Dino() {
  return (
    <StaticImage
      src="../images/astrid_03.png"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
  )
}