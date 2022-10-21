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
       <div className='log'>
        <h3>HOME</h3>
        <h3>ABOUT</h3>
        <h3>MOVIES</h3>
        <h3>SERIES</h3>
         </div>      
         </div>
          </div>
  )
}

export default Navbar