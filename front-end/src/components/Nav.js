import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Nav = () => {
  const auth= localStorage.getItem('user');
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      <img className="logo" src="data:image/png;base64,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" alt="" />
      { auth ?        <ul className='nav-ul'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add"> Add Product</Link></li>
        <li><Link to="/update">Update Product</Link></li>
        <li></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
      </ul>
      :
      <ul className='nav-ul nav-right'>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      }
    </div>
  )
}

export default Nav
