import React from 'react'

const PortalLayout = () => {
  return (
    <div className="portal-wrapper">
    <nav />
    <header />  
    <main>
        <Outlet />
    </main>
    <footer />
</div>
  )
}

export default PortalLayout