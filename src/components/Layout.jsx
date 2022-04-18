import React, { useEffect, useState } from 'react'
import NavBar from './NavBar/NavBar'
import Sidebar from '../components/Sidebar/Sidebar.js'

function Layout(props){



    return (
        <div>
        {/* <NavBar /> */}
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

      <main role="main">
        {props.preContainer && props.preContainer}
        <div className="album py-5 bg-light">
          <div className="container">
            {props.children}
          </div>
        </div>
      </main>
        </div>
    )

}

export default Layout