import React from 'react'

export default ({ location }) => (
  <section className='location'>
    <h6>{location.name}</h6>
    <p>{location.address}</p>
    <p>Square Feet: {location.squareFeet}</p>
    <p>Handicap Access: {String(location.handicap)}</p>
  </section>
)
