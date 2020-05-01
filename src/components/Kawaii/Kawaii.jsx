import React, { useState, useEffect } from 'react'
import paths from './paths'

const Kawaii = ({ mood }) => {
  return (
    <div className="Kawaii">
      <svg version="1.1" viewBox="0 0 441.66 441.66" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g>
          <g>
            <circle cx="87.28" cy="169.33" r="43.97" transform="translate(-94.17 111.31) rotate(-45)" fill="#1c1c1c" />
            <circle cx="73.05" cy="152.3" r="12.94" transform="translate(-86.3 96.26) rotate(-45)" fill="#fff" />
            <circle cx="92.72" cy="172.68" r="7.45" fill="#fff" />
          </g>
          <g>
            <circle cx="354.3" cy="169.33" r="43.97" transform="translate(-15.96 300.12) rotate(-45)" fill="#1c1c1c" />
            <path d="M353,152.3a12.94,12.94,0,1,1-12.94-12.93A12.94,12.94,0,0,1,353,152.3Z" fill="#fff" />
            <circle cx="359.74" cy="172.68" r="7.44" fill="#fff" />
          </g>
        </g>
        <g>
          <ellipse cx="88.75" cy="250.78" rx="30.1" ry="22.38" fill="#00a39a" />
          <ellipse cx="352.83" cy="250.78" rx="30.1" ry="22.38" fill="#00a39a" />
        </g>
        {/* mouth with tongue */}
        {mood === 'happy' && (
          <g>
            <path d={paths.bigsmile1} fill="#1c1c1c" />
            <path d={paths.bigsmile2} fill="#ff6188" />
          </g>
        )}
        {mood === 'excited' && (
          <g>
            <path d={paths.tongue1} fill="#ff6188" />
            <path d={paths.tongue2} fill="#1c1c1c" />
            <path d={paths.tongue3} fill="#1c1c1c" />
          </g>
        )}
        {mood === 'sad' && <path d={paths.sad} fill="#1c1c1c" />}
      </svg>
    </div>
  )
}

export default Kawaii
