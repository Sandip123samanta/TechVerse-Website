import React from 'react'
import './style.scss'
import Link from 'next/link'

function GlowBtn() {
  return (
    <div className="container">
        <Link className="btn" href="/events">
            <span className="btnInner text-[2vw]">Register Now</span>
        </Link>
    </div>
  )
}

export default GlowBtn