import React, { Fragment } from 'react'

// svgs
import SvgBearWithChips from './../svgs/bear-with-chips'

const Hero = () => (
  <Fragment>
  <div class="HubHero bg-color-yellow pt2 pb6 md:pb2">
  <p class="small-title mxauto text-center color-purple justify-center">
    CHIPS HUB
  </p>
  <p class="nav-link-text color-black text-center block pb2 px6">
    shop chips from around the world
  </p>
  <div class="HubHero__icon-bear w100 hauto mxauto maxw40 mbn10 px2">
    <SvgBearWithChips />
  </div>
</div>
<div class="SampleBox maxw57 mb2 mxauto mt4 md:mt8 px2">
  <p class="nav-link-text nav-link-text--lowercase color-gray-wash text-center py1 px4">
    *the <span class="color-purple">hub</span> only includes nice large 150g+ (5oz+) sizes,
    and fine quality, specialty chips
  </p>
  <p class="color-gray py1 text-center">
    <span class="small-text small-text--less-line-height">
      DON’T KNOW WHERE TO START ?
    </span>
    <br/>
    <br/>
    <span class='small-text small-text--less-line-height color-gray-wash pt1'>
      GET A SAMPLE BOX FOR $7.99
      <br />
      COMES WITH FOUR RANDOM FLAVORS, 40g SIZES.
    </span>
  </p>
  <div class="flex flex-row justify-center">
    <div class="Button__container Button__container--all-yellow">
      <p class="nav-link-text px_25">
        START SAMPLING
      </p>
    </div>
  </div>
</div>
</Fragment>

)

export default Hero;
