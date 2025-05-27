// "use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel';
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard"
import '@/styles/TextChanger.css'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // or wherever your NextAuth config is
import { getServerSession } from "next-auth";
import Link from 'next/link';
import { Twitter, Github } from 'lucide-react'; // Ensure you have lucide-react installed for icons

const Home = async () => {
  const session = await getServerSession(authOptions);

  const userId = session?.user?.id; // real MongoDB ObjectId from DB

  if (!userId) {
    return <p className="text-center text-red-500">Please sign in to see your products.</p>;
  }
  const allProducts = await getAllProducts(userId);
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
          <Searchbar userId={userId} />
        </div>
        <HeroCarousel />
      </div>
     </section>

     <section className="trending-section">
      <h2 className="section-text">
        your products list
      </h2>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
     </section>

    
    
      {/* Footer */}

<footer className="bg-gray-900 text-white py-8 px-4 rounded-t-xl ">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
    <p className="text-sm mb-4 md:mb-0">© {new Date().getFullYear()} RightPrice. All rights reserved. Built with ❤️ by Dev_daizy.</p>

    <div className="flex space-x-6">
      <a
        href="https://x.com/dev_daizy" // Replace with your X.com (Twitter) username
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a
        href="https://github.com/dev-daizy" // Replace with your GitHub repo
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-400 transition"
      >
        <Github className="w-6 h-6" />
      </a>
    </div>
    {/* extra pages */}
    <div>
      <ul className="flex space-x-6 mt-4 md:mt-0">
        <li>
          <Link href="/footer/about" className="hover:text-blue-400 transition">About</Link>
        </li>
        <li>
          <Link href="/footer/contact" className="hover:text-blue-400 transition">Contact</Link>
        </li>
        <li>
          <Link href="/footer/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/footer/terms" className="hover:text-blue-400 transition">Terms of Service</Link>
        </li>
      </ul>
    </div>
  </div>
</footer>
    
    
    </>
  )
}

export default Home