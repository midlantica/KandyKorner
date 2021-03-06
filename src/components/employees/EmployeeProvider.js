import React, { useEffect, useState } from 'react'

// The context is imported and used by individual components that need data
export const EmployeeContext = React.createContext()

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([])

  const getEmployees = () => {
    return fetch('http://localhost:8088/employees')
      .then((res) => res.json())
      .then(setEmployees)
  }

  const addEmployee = (employees) => {
    return fetch('http://localhost:8088/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employees),
    }).then(getEmployees)
  }

  // Load all employees when the component is mounted. Ensure that
  // an empty array is the second argument to avoid infinite loop.
  useEffect(() => {
    getEmployees()
  }, [])

  useEffect(() => {
    console.log('****  LOCATION APPLICATION STATE CHANGED  ****')
  }, [employees])

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  )
}
