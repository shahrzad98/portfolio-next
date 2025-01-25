'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Divider } from '@mantine/core';
const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting);
      } else {
        setIsVisible(false);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-white place-items-center text-left relative mb-24 p-6">
      <div className="bg-gradient-circle sm:w-[1000px] h-[1000px] absolute -left-[500px] -top-[300px] rounded-full -z-10" />
      <h1 className=" text-[50px] font-conthrax sm:w-[700px] text-center">
        Become a Cyfonii Player Now
      </h1>
      <div className="flex sm:flex-row flex-col-reverse">
        <div className="sm:mr-20 mt-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex bg-main-to-transparent py-10 px-6 mb-6 rounded-2xl"
            >
              <Image
                className="mr-4 self-start"
                src="/icon/icon-2.svg"
                alt="icon"
                width={50}
                height={50}
              />
              <Divider orientation="vertical" className="h-[300px]" />
              <div className="ml-6">
                <h2 className="font-conthrax text-[30px]">
                  Connect your wallet
                </h2>
                <p className="sm:w-[550px]">
                  Suspendisse tristique neque a lorem placerat pharetra. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-auto w-auto">
          <Image
            ref={ref}
            className={`animate-left-right-slow transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            src="/portfolio.png"
            width={700}
            height={700}
            alt="portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
