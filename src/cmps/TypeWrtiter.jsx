import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export function TypeWriter() {
  const [text] = useTypewriter({
    words: ['ONTINUE EXPLORING'],
    loop: {},
    typeSpeed: 250
  })
  return (
    <h1>
      C
      <span style={{ fontWeight: 'bold' }}>
        {text}
      </span>
      <span>
        <Cursor />
      </span>
    </h1>
  )
}