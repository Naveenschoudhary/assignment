'use client'
import { baseUrl } from '@/utils/Constant'
import axios from 'axios'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ImageModel } from './ImageModel'
import PaginationFooter from './PaginationFooter'

interface ImageData {
    "id": number,
    "type": "photo",
    "tags": "flower, life, yellow flower",
    "previewURL": string,
    "webformatURL": string,
    "largeImageURL": string,
}
interface apiResponse {
    total: number,
    hits: [ImageData],
}

const Gallery = () => {
    const [data, setData] = useState<undefined | ImageData[]>([])
    const [totalCount, setTotalCount] = useState<null | number | undefined>(null)
    const [imageModel, setImageModel] = useState(true)
    const [page, setPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(21)
    const searchParams = useSearchParams()
    const searchInput = searchParams.get('search')
    const category = searchParams.get('category')
    console.log("process.env.NEXT_PUBLIC_PIXAL_BAY_KEY", console.log(process.env.NEXT_PUBLIC_PIXAL_BAY_KEY))
    const getSearchData = async () => {
        try {
            const response = await axios.get<apiResponse>(`${baseUrl}?key=39157985-677a46cee64105c77bc520474&q=${searchInput || " "}&image_type="photo&per_page=${pageSize}&page=${page}&category=${category}&orientation=horizontal`)
            setData(response.data.hits)
            setTotalCount(response.data.total)
            console.log("response", response.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getSearchData()
    }, [searchParams, page])
    return (
        <>
            <div className='flex items-center justify-center w-full mt-8'>
                <div className='container text-black flex items-center justify-center mx-auto'>
                    <div className="container m-auto grid grid-cols lg:grid-cols-3 md:grid-cols-2  gap-4">
                        {data && data.length > 0 && data.map((data) => (
                            <button onClick={() => setImageModel(true)}>
                                <div className='max-w-[400px] max-h-[200px]'>
                                    <Image src={data.webformatURL} alt='' width={700} height={500} className='w-[400px] h-[200px]' />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <PaginationFooter page={page} setPage={setPage} />
            <ImageModel show={imageModel} setShow={setImageModel} />
        </>
    )
}

export default Gallery