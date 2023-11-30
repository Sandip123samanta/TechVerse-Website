import React from 'react'
import Link from "next/link"
import "./styles.css"

const NavigateButton = ({props}) => {
  return (
    <Link href="/about" className='btnnn p-4 rounded-lg'>
        {props}
    </Link>
  )
}

export default NavigateButton