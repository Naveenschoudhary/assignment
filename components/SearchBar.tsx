'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const SearchBar = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchValue = searchParams.get('search')
  const [searchBar, setSearchBar] = useState(searchValue || '')
  const handleRedirect = () => {
    router.push(`/search?search=${searchBar}`)
  }
  return (
    <div className='mt-8 flex w-full max-w-[700px]'>
      <form action={handleRedirect} className='flex relative w-full'>
        <input
          type="search"
          name='search'
          defaultValue={searchBar}
          className="block w-full h-[60px] rounded-lg leading-none focus:outline-none placeholder-white/50 [ transition-colors duration-200 ] [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-white/20 focus:bg-white/25 ] 
                    [ text-[#333] focus:text-white ]"
          placeholder='space to active search'
          onChange={(e) => setSearchBar(e.target.value)}
          autoFocus
        />
        <button className='absolute mainBtn right-3 text-sm top-3 px-[10px] py-[5px]' type='submit'>Go!</button>
      </form>
    </div>
  )
}

export default SearchBar