'use client';
import Image from 'next/image';
import { useState } from 'react';

const Speciality = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-white mb-[200px] p-12 text-center">
      <div className="mb-[180px]">
        <h2 className="sm:text-[60px] text-[40px] font-conthrax  ">
          Complete Solutions for your NFT
        </h2>
        <p>
          Cyfonii is the premier marketplace for nifties, which are digital
          items you can truly own for yourself
        </p>
      </div>
      <div className="flex justify-center sm:flex-row flex-col items-center">
        {Array.from({ length: 4 })
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              onMouseEnter={() => {
                setIsHovered(true);
                setTimeout(() => setIsHovered(false), 1000);
              }}
              className="pt-20 px-5 rounded-2xl bg-main-to-transparent text-center relative mr-10 group mb-40 sm:mb-0 "
            >
              <div
                className={`rounded-full flex justify-center items-center w-[140px] h-[140px] bg-purple500 bg-opacity-50
           absolute -top-[90px] left-1/2  transform -translate-x-1/2 ${isHovered ? 'loading-flip' : ''}`}
              >
                <div className="rounded-full flex justify-center items-center w-[80px] h-[80px] ">
                  <Image
                    loading="lazy"
                    src="/logo1.png"
                    alt="logo"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="text-center w-full">
                <h2 className="mb-3 text-2xl font-conthrax  text-center ">
                  Huge Collection
                </h2>
                <p>
                  Oficia dese runt mollit anim id est labo met, consectetur
                  adipis
                </p>
                <h3 className="font-conthrax text-[60px] opacity-10 group-hover:opacity-100 transition-opacity duration-300">
                  01
                </h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Speciality;
