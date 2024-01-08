import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
const navIcons = [
    { src: '/assets/icons/search.svg' , alt: 'search'},
    { src: '/assets/icons/black-heart.svg' , alt: 'Heart'},
    { src: '/assets/icons/user.svg' , alt: 'User'},
]

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href="/" className='flex items-center gap-1'>
                <Image
                 src="/assets/icons/logo.png"
                 width={120}
                 height={120}
                 alt='logo'
                 />

                 <p className='nav-logo hidden  md:block'>
                    Right<span className='text-primary'>Price</span>
                 </p>
            </Link>


            <div className="flex item-center gap-2 md:gap-5">
                {navIcons.map((icon) => (
                    <Image
                      key={icon.alt}
                      src={icon.src}
                      alt={icon.alt}
                      width={30}
                      height={30}
                      className='object-contain'
                      />
                ))}
            </div>

        </nav>
    </header>
    
  )
}

export default Navbar