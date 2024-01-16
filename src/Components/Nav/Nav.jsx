import React from 'react'
import styles from"./Nav.module.css";

const Nav = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="..\public\Logo.png" alt="logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav
