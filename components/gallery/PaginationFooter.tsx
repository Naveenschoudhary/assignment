import React from 'react'

const PaginationFooter = ({ page, setPage }: { page: number, setPage: React.Dispatch<React.SetStateAction<number>> }) => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='container mx-auto mt-4 mb-8 h-[100px] text-black flex items-center justify-center gap-2'>
                <button className='btnPage' disabled={page === 1} onClick={() => { page !== 0 && setPage(page - 1) }}>Perious</button>
                <div>{page}</div>
                <button className='btnPage' onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    )
}

export default PaginationFooter