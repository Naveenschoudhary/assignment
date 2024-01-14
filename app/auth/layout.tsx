import Image from 'next/image'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="relative h-[100vh] w-[100vw]">
                <Image
                    src={'https://source.unsplash.com/qDbaQGEwPtI/2400x1823'}
                    fill
                    alt="test"

                />
                <div
                    className="form-wrapper 
           min-h-screen
           [ p-4 md:p-6 lg:p-8 ]
           [ flex justify-center items-center ]"
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout