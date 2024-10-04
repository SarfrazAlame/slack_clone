'use client'
import React from 'react'
import Toolbar from './Toolbar'

const WorkspaceLayout = ({children}: React.PropsWithChildren) => {
  return (
    <div className='h-full '>
        <Toolbar/>
        {children}
    </div>
  )
}

export default WorkspaceLayout