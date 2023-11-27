import React from 'react'
import EventCard from '@/components/eventsection/eventcard/EventCard'
import Link from 'next/link'

const page = () => {
  return (
    <div className='h-auto w-screen'>
      <div className='md:grid md:grid-cols-4 md:m-28 p-16 mt-16 grid gap-6 grid-cols-1'>
     <Link href={'/event/registration/8ballpool'}><EventCard imgUrl={"/8 ball pool.jpg"} eventName={'8 BALL POOL'} coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/bgmi'}><EventCard imgUrl={"/Bgmi.jpg"}eventName={'BGMI'} coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/bishopbattle'}><EventCard imgUrl={"/Chess.jpg"}eventName={'BISHOP BATTLE'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'//event/registration/craftopia'}><EventCard imgUrl={"/craftopia.jpg"}eventName={'CRAFTOPIA'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'//event/registration/efootball'}><EventCard imgUrl={"/E football.jpg"}eventName={'E-FOOTBALL'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/freezetheframe'}><EventCard imgUrl={"/Freeze the frame.jpg"}eventName={'FREEZZE THE FRAME'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/ideascape'}><EventCard imgUrl={"/ideascape.jpg"}eventName={'IDEASCAPE'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/modeldisplay'}><EventCard imgUrl={"/model display.jpg"}eventName={'MODEL DISPLAY'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/posterexhibition'}><EventCard imgUrl={"/Poster Exibhision.jpg"}eventName={'POSTER EXHIBITION'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/roborampage'}><EventCard imgUrl={"/Robo Rampage.jpg"}eventName={'ROBO RAMPAGE'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/supercoder'}><EventCard imgUrl={"/Super Coder.jpg"}eventName={'SUPER CODER'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/techtrivia'}><EventCard imgUrl={"/Tech Trivia.jpg"}eventName={'TECH TRIVIA'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/treasurehunt'}><EventCard imgUrl={"/treasure hunt.jpg"}eventName={'TREASURE HUNT'}coHeadName={"Click Here To Register"}/></Link> 
     <Link href={'/event/registration/webdevlopment'}><EventCard imgUrl={"/web development.jpg"}eventName={'WEB DEVELOPMENT'}coHeadName={"Click Here To Register"}/></Link> 
    
    








      </div>





    </div>
  )
}

export default page