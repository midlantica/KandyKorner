import React from 'react'

export default ({ employee }) => (
  <section className='box employee'>
    <h4>{employee.name}</h4>
    <p>Location: {employee.location}</p>
    <p>Manager: {String(employee.manager)}</p>
    <p>Full Time: {String(employee.fullTime)}</p>
    <p>Hourly Rate: {employee.hourlyRate}</p>
  </section>
)
