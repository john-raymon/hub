import React from 'react'

const Footer = () => (
  <div class="Footer bg-color-yellow py4">
  <div class="flex flex-col md:flex-row justify-evenly md:items-end">
    <ul class="flex flex-row color-black-wash small-text order-1 md:order-0 mxauto justify-center md:justify-start md:mx0 px_5 md:px0 flex-wrap">
      <li class="px_5 py_25">
        <p>
          About Us
        </p>
      </li>
      <li class="px_5 py_25">
        <p>
          Privacy Policy
        </p>
      </li>
      <li class="px_5 py_25">
        <p>
          Terms and Conditions
        </p>
      </li>
    </ul>

    <p class="sub-text color-black-wash text-center md:text-right pb2 md:p0">
      have any questions ?
      <br/>
      you can reach us at
      <br/>
      info@boxandchips.com
    </p>
  </div>
</div>);

export default Footer;
