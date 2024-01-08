"use client"
import React, { FormEvent , useState } from 'react'
import Image from 'next/image'
import { scrapeAndStoreProduct } from '@/lib/actions';

const isValidAmazonProductURl = (url: string) => {
  try{
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(
       hostname.includes('amazon.com') ||
       hostname.includes('amazon.') ||
       hostname.endsWith('amazon')
    ) {
        return true;
       }
  }catch (error) {
    return false;

  }
  return false;

}
const Searchbar = () => {
  const [searchPrompt , setSearchPrompt] = useState('');
  const [isLoading , setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const isValidLink = isValidAmazonProductURl(searchPrompt);

      if(!isValidLink) return alert('please enter proper link')

      try {
        setIsLoading(true);
        // scrape the product page
        const product = await scrapeAndStoreProduct(searchPrompt); 

      } catch (error) {
        console.log(error)

      } finally {
        setIsLoading(false);
      }

    }

    
  return (
    <form className='flex flex-wrap gap-4 mt-8'
    onSubmit={handleSubmit}
    >
        <input 
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder='Enter product link here' 
        className='searchbar-input'
     />
     <button
      type='submit'
      className='searchbar-btn'
      disabled={searchPrompt === ''}
      >
        {isLoading ? 'Searching...' : (
          <>
            <span className="hidden lg:inline-block">Search</span>
     <Image 
      src='/assets/icons/searchwhite.png'
      width={20}
      height={20}
      alt='logo'
      className="lg:hidden"
       />
          </>
        ) }
     </button>


    </form>
  )
}

export default Searchbar