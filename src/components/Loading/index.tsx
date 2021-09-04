import React from 'react'
// import dark from 'styles/themes/dark'

// import Cookies from 'js-cookie'

import * as S from './styles'

const Loading = () => {
  // const cookieTheme = JSON.parse(Cookies.get('theme') || JSON.stringify(dark))
  return (
    <S.Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50 42)">
          <g transform="scale(0.8)">
            <g transform="translate(-50 -50)">
              <polygon fill="#ffffff" points="72.5 50 50 11 27.5 50 50 50">
                {/* <div />
              <polygon
                fill={`${cookieTheme.color.text}`}
                points="72.5 50 50 11 27.5 50 50 50"
              > */}
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0 50 38.5;360 50 38.5"
                  keyTimes="0;1"
                ></animateTransform>
              </polygon>
              <polygon fill="#ffffff" points="5 89 50 89 27.5 50">
                {/* <div />
              <polygon
                fill={`${cookieTheme.color.text}`}
                points="5 89 50 89 27.5 50"
              > */}
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0 27.5 77.5;360 27.5 77.5"
                  keyTimes="0;1"
                ></animateTransform>
              </polygon>
              <polygon fill="#ffffff" points="72.5 50 50 89 95 89">
                {/* <div />
              <polygon
                fill={`${cookieTheme.color.text}`}
                points="72.5 50 50 89 95 89"
              > */}
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0 72.5 77.5;360 72 77.5"
                  keyTimes="0;1"
                ></animateTransform>
              </polygon>
            </g>
          </g>
        </g>
      </svg>
    </S.Container>
  )
}

export default Loading
