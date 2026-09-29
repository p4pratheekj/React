import React from 'react'

const HoverTitle = ({ text }) => {
  return (
    <h1 className="color-hover-title">
      {text.split('').map((char, index) => {
        if (char === ' ') {
          return ' '
        }
         return (
          <span key={index}>
            {char}
          </span>
        )
      })}
    </h1>
  )
}

export default HoverTitle