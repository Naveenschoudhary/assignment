import HeroSectionWrapper from '@/components/HeroSectionWrapper'
import SearchBar from '@/components/SearchBar'

export default async function Index() {
  return (
    <HeroSectionWrapper searchPage={false}>
      <div className=' mt-8  '>
        <h2 className='heroHeading max-w-[800px]'>Discover over 2,000,000 free Stock Images</h2>
        <SearchBar />
      </div>
    </HeroSectionWrapper>
  )
}
