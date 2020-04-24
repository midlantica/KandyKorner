import React from 'react'

export default ({ location }) => (
  <section className='location'>
    <h6 className='location__name'>{location.name}</h6>
    <p className='location__address'>{location.address}</p>
    <p className='location__address'>Square Feet: {location.squareFeet}</p>
    <p className='location__address'>
      Handicap Access: {String(location.handicap)}
    </p>
  </section>
)
