import React from 'react'
import {
  Link
} from "react-router-dom";


import SvgLogo from './../svgs/logo'

const Header = ({checkout}) => {
  console.log('the count is', checkout)
  return (
  <div className="Nav Nav__container relative flex flex-row justify-evenly items-center pt4 pb3 mx-auto px_25 z3 bg-color-yellow">
    <div className="Nav__logo inline-block">
      <SvgLogo />
    </div>
    <div className="flex flex-col">
      <Link to="/cart">
        <p className='text-right nav-link-text color-black-wash pointer pb_5'>
          cart({checkout.lineItems.length})
        </p>
      </Link>
      <ul className="flex flex-col text-right md:text-center sm:flex-row nav-link-text">
        <li className="pb_25 sm:py0 px_25">
          <a href="/#how-does-it-work" className="no-decoration">
            <p className="pointer">
              How does it work ?
            </p>
          </a>
        </li>
        <span className="none sm:inline-block">|</span>
        <li className="pb_25 sm:py0 px_25">
          <a href="/pages/hub" className="no-decoration">
            <p className="pointer color-purple">
              Chips Hub
            </p>
          </a>
        </li>
        <span className="none sm:inline-block">|</span>
        <li className="pointer pb_25 sm:py0 px_25">
          <p>
            Get a Sample Box
          </p>
        </li>
      </ul>
    </div>
  </div>
)}

export default Header;
