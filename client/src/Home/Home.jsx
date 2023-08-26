import React from 'react'
import Content from '../Contents/Content'
import './Home.css'
import Services from '../Contents/Services/Services'
function Home() {
  return (
    <>
      <div className="svg-background rounded-bottom">
        <div className='main_container'> 
          <div className="container mt-5">
                <Content/>
          </div>
        </div>
        <div className="container">
          <Services/>
        </div>
      </div>
    </>
  )
}

export default Home