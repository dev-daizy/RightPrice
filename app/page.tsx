// "use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel';
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard"
import '@/styles/TextChanger.css'
const Home = async () => {
  const allProducts = await getAllProducts();
    // const words = ['Price','Time', 'Place', 'Buy'];
    // // const [selectedWord, setSelectedWord] = useState(words[0]);
    // const [wordIndex, setWordIndex] = useState(0);
  
    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     // const randomIndex = Math.floor(Math.random() * words.length);
    //     // const newWord = words[randomIndex];
    //     // setSelectedWord(newWord);
    //     setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    //   },2000); 
  
    //   return () => clearInterval(intervalId); // Cleanup on component unmount
    // }, [words]);

  return (
    <>
     <section className="px-6 md:px-20 pt-8 pb-12">
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <p className="small-text md:text-xl">
            Start your shopping here
            <Image
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width={16}
              height={16}
              />
          </p>
          <h1 className="head-text">
            Unleash the Power of {" "}
            <div className={'textChangerContainer'}>
      <span className={`text-primary ${'transition'}`}>
        Right
        <span className={`text-yellow-500 ${'transition'} ${'lineUpP'}`}>
          {/* words[wordIndex] */}
          P
          </span>
          <span className={`text-yellow-500 ${'transition'} ${'lineUpR'}`}>
          {/* words[wordIndex] */}
          r
          </span>
          <span className={`text-yellow-500 ${'transition'} ${'lineUpI'}`}>
          {/* words[wordIndex] */}
          i
          </span>
          <span className={`text-yellow-500 ${'transition'} ${'lineUpC'}`}>
          {/* words[wordIndex] */}
          c
          </span>
          <span className={`text-yellow-500 ${'transition'} ${'lineUpE'}`}>
          {/* words[wordIndex] */}
          e
          </span>
          
      </span>
    </div>
          </h1>
          <p className="mt-6 lg:text-2xl text-slate-700">
          Empower Your Savings Journey: Track Prices, Seize Deals, and Save Smart with Our Price Tracker
          <span className='text-xl flex mt-5 text-center border-b-2 border-yellow-600 p-4 text-yellow-600 lg:text-3xl'>
          Copy your Product Link and Paste it here
    
          </span>
          </p>
          <Searchbar />
        </div>
        <HeroCarousel />
      </div>
     </section>

     <section className="trending-section">
      <h2 className="section-text">
        Trending
      </h2>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
     </section>
    
    
    
    
    </>
  )
}

export default Home