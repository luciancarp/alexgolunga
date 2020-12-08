import React from 'react'
// import styled from 'styled-components'

let navlinks = [
  'Sound Design Reel',
  'Wwise Unity Integration',
  'MaxMSP/Gen/Jitter',
  'Haptic Design',
  'Haptic Design',
  'Sound Installation: beating.',
]

const Navigation = () => {
  return (
    <div>
      {navlinks.map((link) => (
        <h2>{link}</h2>
      ))}
    </div>
  )
}

export default Navigation
