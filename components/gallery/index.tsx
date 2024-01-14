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
    "previewURL": string,
    "webformatURL": string,
    "largeImageURL": string,
    "previewWidth": number,
    "previewHeight": number,
    "webformatWidth": number,
    "webformatHeight": number,
    "webformatUrl": string,
    "user": string
}
interface apiResponse {
    total: number,
    hits: [ImageData] | null,
}

const Gallery = () => {
    const [data, setData] = useState<undefined | ImageData[]>([])
    const [totalCount, setTotalCount] = useState<null | number | undefined>(null)
    const [imageClicked, setImageClicked] = useState<null | ImageData>(null)
    const [imageModel, setImageModel] = useState(false)
    const [page, setPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(21)
    const searchParams = useSearchParams()
    const searchInput = searchParams.get('search')
    const category = searchParams.get('category')
    console.log("process.env.NEXT_PUBLIC_PIXAL_BAY_KEY", console.log(process.env.NEXT_PUBLIC_PIXAL_BAY_KEY))
    const apiKey = process.env.NEXT_PUBLIC_PIXAL_BAY_KEY
    const getSearchData = async () => {
        try {
            const response = await axios.get<apiResponse>(`${baseUrl}?key=${apiKey}&q=${searchInput || " "}&image_type="photo&per_page=${pageSize}&page=${page}&category=${category}&orientation=horizontal`)
            setData(response.data.hits)
            setTotalCount(response.data.total)
            console.log("response", response.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getSearchData()
    }, [searchParams, page, apiKey])
    const handleClose = () => {
        setImageClicked(null)
        setImageModel(false)
    }
    const handleOpen = (data: ImageData | null) => {
        setImageClicked(data)
        setImageModel(true)
    }
    return (
        <>
            <div className='flex items-center justify-center w-full mt-8'>
                <div className='container text-black flex items-center justify-center mx-auto'>
                    <div className="container m-auto grid grid-cols lg:grid-cols-3 md:grid-cols-2  gap-4">
                        {data && data.length > 0 && data.map((data, i) => (
                            <>
                                <button onClick={() => handleOpen(data)}>
                                    <div className='max-w-[400px] max-h-[200px]'>
                                        <Image src={data.webformatURL} alt='' width={700} height={500} className='w-[400px] h-[200px]' />
                                    </div>
                                </button>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            {/* @ts-ignore */}
            {imageModel && <ImageModel show={imageModel} onClose={handleClose} data={imageClicked} />}
            <PaginationFooter page={page} setPage={setPage} />

        </>
    )
}

export default Gallery