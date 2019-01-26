import React from 'react'

// svgs
import SvgBearWithChips from './../svgs/bear-with-chips'

const Hero = () => (
  <div class="HubHero bg-color-yellow pt2 pb6 md:pb2">
  <p class="small-title mxauto text-center color-purple justify-center">
    CHIPS HUB
  </p>
  <p class="nav-link-text color-black text-center block pb2 px2">
    shop chips from around the world
  </p>
  <div class="HubHero__icon-bear w100 hauto mxauto maxw57 mbn10 px2">
    <SvgBearWithChips />
  </div>
</div>
)

export default Hero;
