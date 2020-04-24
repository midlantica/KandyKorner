import React from 'react'

export default ({ location }) => (
  <section className='box location'>
    <h4>{location.name}</h4>
    <p>{location.address}</p>
    <p>Square Feet: {location.squareFeet}</p>
    <p>Handicap Access: {String(location.handicap)}</p>
  </section>
)
