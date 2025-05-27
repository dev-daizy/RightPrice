"use client";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { MotionDiv } from "@/components/motion/Motion-div";
import { CheckCircle, TrendingUp, Wallet , Github, Twitter } from "lucide-react";
import { motion } from "framer-motion"; 
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';




export  function LandingPage() {
   const router = useRouter();
  return (
    <div className="bg-white text-gray-900 ">
      {/* Hero Section */}
      <section className="min-h-max p-10 flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-red-500 to-yellow-500 rounded-b-3xl">
      <Link href="/" className='flex items-center gap-1 mb-4'>
                <Image
                 src="/assets/icons/logo.png"
                 width={120}
                 height={120}
                 alt='logo'
                 />
            </Link>
        <h1 className="text-5xl text-white-200 font-bold mb-4 gap-2 p-2 ">
          Track Prices Smartly with 
        </h1>
        <h2 className="text-5xl text-white-200 font-bold mb-4 ">
        <span className="text-5xl  text-white-200 font-sans font-extralight">" RightPrice "</span>
        </h2>
        <p className="text-xl max-w-xl text-white-200 md:text-3xl mb-6 font-semibold">
          Your personal price tracking assistant. Paste product links, track price changes, and save money!
        </p>
        <button
            onClick={() => signIn("google")}
            className="bg-white text-slate-700 font-semibold px-6 py-3 rounded-xl shadow-xl m-4 md:m-5 hover:bg-gray-200 transition duration-300 ease-in-out flex items-center"
          >
            <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            width={20}  
            height={20}
            alt="Google Logo"
            className="inline-block mr-2"
            />
            Sign in with Google
           
          </button>
      </section>

 
      <section className="py-10 px-4 bg-white overflow-x-hidden">
  <h2 className="text-4xl text-slate-700 font-bold text-center mb-2 border-b-4 pb-5">" How It Works ? "</h2>
  <div className="flex flex-col  max-w-6xl mx-auto">

{/* Step 1 - Responsive Layout with Left Content & Right Image */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="mt-12"
>
  <div className="bg-red-100 rounded-3xl px-6 md:px-10 py-8 w-full max-w-6xl shadow-md mx-auto">
    
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
      
      {/* Left Side: Text and Icon */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center mb-4">
          <Wallet className="h-10 w-10 text-red-500 mr-3" />
          <h3 className="text-2xl md:text-3xl font-semibold">Step 1: Paste Link</h3>
        </div>
        <p className="text-gray-700 text-lg md:text-xl md:hidden leading-relaxed">
          Add any shopping website product URL to start tracking.
        </p>
        <p className="hidden md:block text-gray-700 font-light md:text-xl leading-relaxed ">
  Add any shopping website product URL—whether it's from Amazon, Flipkart, or another major retailer—and we'll instantly begin tracking it for you. 
  Just login with google account required, just paste and go. It's the simplest way to stay informed about pricing trends on products you care about.
</p>

      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/assets/images/searchbox.png"
          width={500}
          height={400}
          alt="Paste Link"
          className="rounded-xl shadow"
        />
      </div>
    </div>

  </div>
</motion.div>

{/* Step 2 - Responsive Layout */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="mt-12"
>
  <div className="bg-yellow-100 rounded-3xl px-6 md:px-10 py-8 w-full max-w-6xl shadow-md mx-auto">
    
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
      
      {/* Left Side: Text and Icon */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-10 w-10 text-yellow-500 mr-3" />
          <h3 className="text-2xl md:text-3xl font-semibold">Step 2: Track Price</h3>
        </div>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed md:hidden">
          Our system regularly checks for price changes.
        </p>
        <p className="hidden md:block text-gray-700 font-light md:text-xl leading-relaxed">
  Our intelligent system monitors product prices multiple times a day using smart scraping and automation. 
  It tracks fluctuations, identifies trends, and stores pricing history so you never miss a deal or overpay again.
</p>

      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/assets/images/trackprice.png"
          width={500}
          height={400}
          alt="Track Price"
          className="rounded-xl shadow"
        />
      </div>
    </div>

  </div>
</motion.div>

 {/* Step 3 - Responsive Layout */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="mt-12"
>
  <div className="bg-green-100 rounded-3xl px-6 md:px-10 py-8 w-full max-w-6xl shadow-md mx-auto">
    
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
      
      {/* Left Side: Text and Icon */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center mb-4">
          <CheckCircle className="h-10 w-10 text-green-600 mr-3" />
          <h3 className="text-2xl md:text-3xl font-semibold">Step 3: Get Alerts</h3>
        </div>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed md:hidden">
          Receive email notifications when prices drop.
        </p>
        <p className="hidden md:block text-gray-700 font-light md:text-xl leading-relaxed">
  The moment a price drops below your previously recorded minimum or hits a major discount, we’ll notify you instantly via email. 
  Stay ahead of sales, limited-time offers, and price manipulations—saving time, effort, and money.
</p>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/assets/images/emailalert.png"
          width={500}
          height={400}
          alt="Get Alerts"
          className="rounded-xl shadow"
        />
      </div>
    </div>

  </div>
</motion.div>


  </div>
</section>


      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-800 to-blue-400 text-white-200 overflow-hidden rounded-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">Why RightPrice?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="hidden md:block" >
            <h3 className="text-4xl font-semibold mb-2">💸 Save <span className="text-green-500">Money</span> </h3>
            <p className="text-white text-2xl p-4 font-light ">Get the best deals without constantly checking prices.
With RightPrice, you no longer need to overpay or miss out on discounts.
We track historical price trends and notify you when the price is genuinely at its lowest—so you shop smart, not impulsively..</p>
          </div>
          <div className="hidden md:block border-l-2 border-r-2 border-blue-300 px-3">
            <h3 className="text-4xl font-semibold mb-2">⏳ Save <span className="text-yellow-400">Time</span> </h3>
            <p className=" text-2xl p-4 font-light">No more wasting hours on manual comparisons.
Instead of hopping between tabs and websites, let RightPrice handle the research for you.
Our system scans and monitors product prices regularly, saving you valuable time and mental energy.</p>
          </div>
        
          <div className="hidden md:block ">
            <h3 className="text-4xl font-semibold mb-2">📈 Stay <span className="text-red-400">Ahead</span></h3>
            <p className=" font-light  text-2xl p-4">Be the first to know when prices fall—never miss the best deal.
You'll get instant alerts via email, so you're always in the loop before stock runs out or prices bounce back up.
With RightPrice, you're always one step ahead of everyone else in the deal game.

</p>
          </div>

          {/* in phone  */}

          <div className="md:hidden pt-6 border-t-2 border-blue-300" >
            <h3 className="text-xl font-semibold mb-2">💸 Save <span className="text-green-500">Money</span> </h3>
            <p className="">Get the best deals without constantly checking prices.</p>
          </div>
        
          <div className="p-6 border-t-2 border-b-2 border-blue-300 md:hidden">
            <h3 className="text-xl font-semibold mb-2">⏳ Save <span className="text-yellow-400">Time</span> </h3>
            <p className="">No more wasting hours on manual comparisons.</p>
          </div>
          <div className="md:hidden pb-6 border-b-2 border-blue-300">
            <h3 className="text-xl font-semibold mb-2">📈 Stay <span className="text-red-400">Ahead</span></h3>
            <p className=" ">Be the first to know when prices fall ,never miss the best deal.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section IN LAPTOP */}
      <div className="mt-20 text-white hidden md:block">
      <section className="bg-gradient-to-b from-green-900 to-green-600 py-20 px-6 rounded-t-3xl">
  <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>

  <div className="flex flex-col md:flex-row justify-center items-end gap-8 max-w-5xl mx-auto">
    
    {/* Free Plan */}
    <div className="flex-1 rounded-t-3xl shadow-md overflow-hidden relative">
      <div className="text-center p-8 bg-red-300">
        <h3 className="text-2xl md:text-4xl font-bold mb-4 border-b-2 pb-2">Free Plan</h3>
        <ul className="text-left text-white space-y-3 md:text-2xl">
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Search any product</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Save up to 5 items</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Amazon, Flipkart support only</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Email alerts</li>
        </ul>
      </div>
      {/* <div className="h-4 bg-red-300 w-full"></div> */}
    </div>

    {/* Pro Plan */}
    <div className="flex-1 bg-yellow-500 rounded-t-3xl shadow-md overflow-hidden relative">
      <div className="text-center p-8">
        <h3 className="text-2xl md:text-4xl font-bold mb-4 border-b-2 pb-2">Pro Plan</h3>
        <ul className="text-left space-y-3 md:text-2xl">
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Search any product</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Save up to 15 items</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Top 10 e-commerce</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Live price comparison</li>
          <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Email & WhatsApp alerts</li>
        </ul>
      </div>
      {/* <div className="h-4 bg-yellow-300 w-full"></div> */}
    </div>

  </div>

{/* buy primium */}
      <div>
  <p className="text-center text-white mt-4 text-semibold text-xl">
    Upgrade to Pro for unlimited tracking and advanced features!
  </p>
  <div className="flex justify-center mt-5">

  {/* <Link href="/pricing">
        <button
          type="button"
          className=" searchbar-btn bg-yellow-500 hover:bg-yellow-600 text-white"
        >
          Buy Premium 🚀
        </button>
      </Link>  */}
  </div>
</div>

</section>

      </div>

      {/* Pricing Section IN MOBILE*/}
<div className="mt-20 text-white md:hidden">
  <section className="bg-gradient-to-b from-green-900 to-green-600 py-20 px-4 rounded-t-3xl">
    <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>

    <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8 max-w-5xl mx-auto">
      
      {/* Free Plan */}
      <div className="w-full max-w-xs md:max-w-sm bg-red-300 rounded-3xl shadow-md overflow-hidden">
        <div className="text-center p-8">
          <h3 className="text-2xl md:text-4xl font-bold mb-4 border-b-2 pb-2">Free Plan</h3>
          <ul className="text-left text-white space-y-3 md:text-2xl">
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Search any product</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Save up to 5 items</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Amazon, Flipkart support only</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Email alerts</li>
          </ul>
        </div>
      </div>

      {/* Pro Plan */}
      <div className="w-full max-w-xs md:max-w-sm bg-yellow-500 rounded-3xl shadow-md overflow-hidden">
        <div className="text-center p-8">
          <h3 className="text-2xl md:text-4xl font-bold mb-4 border-b-2 pb-2">Pro Plan</h3>
          <ul className="text-left space-y-3 md:text-2xl">
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Search any product</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Save up to 15 items</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Top 10 e-commerce sites</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Live price comparison</li>
            <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" />Email & WhatsApp alerts</li>
          </ul>
        </div>
      </div>

    </div>
    {/* Google Sign-In Button */}
<div className="mt-10 flex justify-center">
  <button
    onClick={() => signIn("google")}
    className="flex items-center justify-center bg-white text-slate-700 font-semibold px-6 py-3 rounded-xl shadow-xl hover:bg-gray-200 transition duration-300 ease-in-out"
  >
    <Image
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      width={20}
      height={20}
      alt="Google Logo"
      className="inline-block mr-2"
    />
    Get Started with Google
  </button>
 
</div>
{/* buy primium */}
      <div>
  <p className="text-center text-white mt-4 text-semibold text-xl md:text-3xl">
    Upgrade to Pro for unlimited tracking and advanced features!
  </p>
  {/* <div className="flex justify-center mt-5">

   <button
          type="button"
          onClick={() => 
            {   console.log("Redirecting...");
              router.push("/pricing")}}
          
          className="bg-gradient-to-r from-red-500 to-yellow-400 hover:from-red-600 hover:to-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
        >
          Buy Premium 🚀
        </button>
  </div> */}
</div>
  </section>
</div>

     
      {/* Footer */}

<footer className="bg-gray-900 text-white py-8 px-4 ">
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

    </div>
  );
}


