import React from 'react'

const Navbar = (props) => {
  return (
    <div className='NavigationBar'>
      <div className='logo'>
      <img className="ImageLogo" src="/image/sal.jpg" alt=""></img>
      </div>
      <div className='inp'> 
       <input type="text"
       onChange={(e)=>props.setText(e.target.value)}
       placheloder="Rechercher">
       </input>      
       </div>
          </div>
  )
}

export default Navbar