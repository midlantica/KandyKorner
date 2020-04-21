import React from 'react'
import LocationList from './location/LocationList'
import { LocationProvider } from './location/LocationProvider'
export default () => (
  <>
    <header>
      <h2>Kandy Korner</h2>
      <p>Kandy for the Kid in all of us</p>
    </header>

    <div className='container'>
      <h4>Locations</h4>
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    </div>
    <footer></footer>
  </>
)
