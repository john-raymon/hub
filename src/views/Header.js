import React from 'react'
import {
  Link
} from "react-router-dom";


import SvgLogo from './../svgs/logo'

const Header = ({onCartClick}) => (
  <div class="Nav Nav__container relative flex flex-row justify-evenly items-center pt4 pb2 mx-auto px_25 z3 bg-color-yellow">
  <div class="Nav__logo inline-block">
    <SvgLogo />
  </div>
  <div class="flex flex-col">
    <Link to="/cart">
      <p class='text-right nav-link-text color-black-wash pointer' onClick={onCartClick}>
        cart()
      </p>
    </Link>
    <ul class="flex flex-col text-right md:text-center sm:flex-row nav-link-text">
      <li class="py_25 sm:py0 px_25">
        <a href="/#how-does-it-work" class="no-decoration">
          <p class="pointer">
            How does it work ?
          </p>
        </a>
      </li>
      <span class="none sm:inline-block">|</span>
      <li class="py_25 sm:py0 px_25">
        <a href="/pages/hub" class="no-decoration">
          <p class="pointer color-purple">
            Chips Hub
          </p>
        </a>
      </li>
      <span class="none sm:inline-block">|</span>
      <li class="pointer py_25 sm:py0 px_25">
        <p>
          Get a Sample Box
        </p>
      </li>
    </ul>
  </div>
</div>
)

export default Header;
