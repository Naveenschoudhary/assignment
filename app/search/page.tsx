import HeroSectionWrapper from '@/components/HeroSectionWrapper'
import SearchBar from '@/components/SearchBar'
import Gallery from '@/components/gallery'
import { KeyWords } from '@/utils/Constant'
import Link from 'next/link'
import React from 'react'



const page = ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) => {
    const searchValue = searchParams?.search
    return (
        <div className='h-full'>
            <HeroSectionWrapper searchPage={true}>
                <div className='w-full flex items-center justify-center flex-col'>
                    <SearchBar />
                    <h5 className='mt-8'>Result : {searchValue}</h5>
                </div>
            </HeroSectionWrapper>
            {/* Below Header */}
            <div className='h-[100px] bg-[#F5F5F5] mx-auto pl-4 flex gap-4 overflow-x-auto justify-center items-center b'>
                <div className='container flex gap-4'>
                    {KeyWords.map((keyword, i) => (<Link href={`/search?category=${keyword}`} key={i} style={{ borderRadius: "3px", border: "1px solid #767676" }} className='px-4 py-2'>{keyword}</Link>))}
                </div>
            </div>
            {/* Gallery */}
            <Gallery />
        </div>
    )
}

export default page