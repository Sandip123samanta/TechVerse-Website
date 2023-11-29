import React from 'react'
import './style.scss'
import Link from 'next/link'

function GlowBtn() {
  return (
    <div class="container">
        <Link class="btn" href="/events">
            <span class="btnInner text-[2vw]">Register Now</span>
        </Link>
    </div>
  )
}

export default GlowBtn