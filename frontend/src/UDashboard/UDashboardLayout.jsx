import React from 'react'
import USidebar from './USidebar'
import { Outlet } from 'react-router-dom'

const UDashboardLayout = () => {
  return (
    <div className=' flex gap-4 flex-col md:flex-row '>
      <USidebar/>
      <Outlet/>
    </div>
  )
}

export default UDashboardLayout
