import React, { useContext } from 'react'
import Employee from './Employee'
import { EmployeeContext } from './EmployeeProvider'

export default () => {
  const { employees } = useContext(EmployeeContext)

  return (
    <div className='baseGrid employees'>
      {employees.map((emps) => (
        <Employee key={emps.id} employee={emps} />
      ))}
    </div>
  )
}
