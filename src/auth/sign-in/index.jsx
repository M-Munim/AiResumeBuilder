import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const index = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default index