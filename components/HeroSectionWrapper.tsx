import Image from 'next/image';
import React, { ReactNode } from 'react';
import Header from './Header';

const HeroSectionWrapper = ({ children, searchPage = false }: { children: ReactNode, searchPage: Boolean }) => {
    return (
        <div>
            <div
                style={{
                    position: 'relative',
                    width: '100vw'
                }}
                className={searchPage ? "h-[40vh] md:h-[60vh] lg:h-[60vh]" : "h-[40vh] md:h-[60vh] lg:h-[100vh]"}
            >
                <Image
                    src="https://tikaraja.com/assets/mainbg.webp"
                    fill
                    alt="background"
                    style={{
                        bottom: '0%',
                        objectFit: 'cover'
                    }}
                />
                <div className="absolute w-full mx-auto flex justify-center items-center flex-col z-10">
                    <Header />
                    <div className='z-10 flex justify-center items-center mt-8 container text-white'>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionWrapper;
