'use client';
import React, { useEffect } from 'react'
import StarsCanvas from '@/components/common/starbackground/StarBackground'
import AboutHero from '@/components/aboutpage/aboutherosection'
import AboutCollege from '@/components/aboutpage/aboutcollege/collegeImage'
import Description from '@/components/aboutpage/aboutcollege/description'
import AboutTeam from '@/components/aboutpage/team'
import AboutFooter from '@/components/aboutpage/aboutfooter/index'
import withTransition from '@/components/common/transition/transition';
import CustomCursor from '@/components/common/customCursor/CustomCursor';

function page() {

 useEffect(()=>{
  (
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();     
    }
  )()
 },[])

  return (
    <div className='w-full h-full overflow-x-hidden'>
      <CustomCursor/>
      <StarsCanvas/>
      <AboutHero/>
      <AboutCollege/>
      <Description/>
      <AboutTeam/>
      <AboutFooter/>
    </div>
  )
}

export default withTransition(page)