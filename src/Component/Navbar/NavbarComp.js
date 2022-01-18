import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComp = () => {
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }

    const navscroll = () => {
        const navbar = document.getElementById("navbar")
        if (window.scrollY >= 80) {
            navbar.classList.add("sticky");
        } else { navbar.classList.remove("sticky"); }
    }
    useEffect(() => {
        window.addEventListener('scroll', navscroll)
    })
    return (

            <Navbar expand="lg" className={`p-2 ${show === false ? "hide" : "show"}`} id="navbar" onScroll={navscroll}>
                <div className='logo ms-5'>
                    <span>GEOTOUR </span>
                    <span>BATUR</span>
                </div>
                <div className='menu-list ms-auto mx-5'>
                    <div className='cancel-btn text-right' onClick={toggle}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    <div className="menu-items">
                        <Link to="/" className='link'>Home</Link>
                        <Link to='/about' className='link'>About</Link>
                        <Link to='/#' className='link'>Catalog</Link>
                        <Link to='/information-center' className='link'>Information Center</Link>
                        <Link to='/contact' className='link'>Contact</Link>
                    </div>
                    <div className='menu-open ' onClick={toggle}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </Navbar>
    )
}

export default NavbarComp
