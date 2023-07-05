"use client";

import Image from 'next/image';

import { CustomerButton } from '@/components';

const Hero = () => {

  const handleScroll = () => {
    // TODO: Handle
  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-[70px] padding-x '>
        <h1 className='hero__title'>
          Find, Book, rent a car-quick super easy !
        </h1>

        <p className='hero__subtitle'>
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomerButton 
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className='hero__image-container '>
        <div className='hero__image hidden md:flex'>
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className='object-contain'
          />
        </div> 

        <div className='hero__image-overlay hidden md:flex' />

      </div>
    </div>
  )
}

export default Hero