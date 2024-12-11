import React from 'react'
import { Button } from './components/ui/button'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Outlet  />
    </>
  )
}

export default App