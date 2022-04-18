import NavBar from './NavBar/NavBar'

const Layout = (props) =>{

    return (
        <div>
        <NavBar />
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