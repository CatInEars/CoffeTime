import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export function BackButton(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 306 306"
      fill='black'
      {...props}
    >
      <Path d="M247.35 35.7L211.65 0l-153 153 153 153 35.7-35.7L130.05 153z" />
    </Svg>
  )
}
