import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/logo2.png'
import Instagram from '../../../../public/Instagram2.png'
import Facebook from '../../../../public/Facebook2.png'
import GNIT from '../../../../public/GNIT.png'
import JIS from '../../../../public/jisgroup.png'

function Footer() {
  return (
    <div className='relative w-screen h-screen flex flex-col items-center justify-between text-white pt-10 pl-10 pr-10'>
        <div className='w-[90vw] h-[70vh] flex flex-col mt-[2vw] items-center justify-center'>
            <div className={`${styles.logoContainer} w-full h-auto flex flex-row justify-center gap-[5vw]`}>
                <div className={styles.logo}>
                    <Image src={Logo} alt="igm"/>
                </div>
                <div className={styles.venue}>
                    <h1 className='text-gray-500 font-young text-[2vw]'>VENUE LOCATION</h1>
                    <h3 className='mt-2 text-[1.5vw] mb-2'>18-19 JANUARY, 2024</h3>
                    <h3 className='text-[1.5vw]'>Guru Nanak Institute of Technology 157/F, Nilgunj Rd, Sahid Colony, Panihati, Kolkata, West Bengal 700114</h3>
                </div>
                <div className={styles.socials}>
                    <h1 className='text-gray-500 font-young text-[2vw]'>SOCIAL CONNECTIONS</h1>
                    <h3 className='text-[1.2vw]'>Keep an eye on our hotdrops</h3>
                    <div className='relative w-full h-auto flex gap-0'>
                        <Link className='w-1/5' href='#'>
                            <Image className='object-cover w-full' src={Facebook}  alt="igm"/>
                        </Link>
                        <Link className='w-1/5' href='#'>
                            <Image className='object-cover w-full' src={Instagram}  alt="igm"/>
                        </Link>      
                    </div>
                    <div className={`${styles.sponser} relative w-full h-auto`}>
                        <h1 className='text-gray-500 font-young text-[2vw] mt-[2vw]'>Our sponsers</h1>
                        <div className='relative w-full flex items-center gap-3'>
                            <Image src={GNIT} className='object-cover w-2/5' alt="igm"/>
                            <Image src={JIS} className='object-cover w-1/5 h-fit' alt="igm"/>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.creator}>
            <hr className='bg-gray-500 w-[90vw] mb-4'/>
            <h1 className='text-[1vw] text-gray-500'>©️ 2024 <Link className='text-blue-500' href='#'>TECHVERSE</Link> ORGANIZED BY GNIT</h1>
            <h1 className='text-[1vw] text-gray-500'>
                DESIGNED & DEVELOPED WITH LOVE BY 
            </h1>
            <div className='flex flex-col text-[1.5vw]'>
                <h1>
                    <Link className='text-blue-500' href='#'>PARTHIV SARKAR </Link>
                 &  <Link className='text-blue-500' href='#'>KOUSIK BOSE</Link> &
                 </h1>
                <Link className='text-blue-500' href='#'>SANDIP SAMANTA</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer