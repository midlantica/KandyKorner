import React, { useContext } from 'react'
import Location from './Location'
import { LocationContext } from './LocationProvider'

export default () => {
  const { locations } = useContext(LocationContext)

  return (
    <div className='box locations'>
      {locations.map((loc) => (
        <Location key={loc.id} location={loc} />
      ))}
    </div>
  )
}
