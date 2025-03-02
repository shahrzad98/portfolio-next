'use client';
import Image from 'next/image';
import { useBreakpoint } from '@/hooks/useBreakPoint';

const AboutUs = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { isMobile } = useBreakpoint();
  return (
    <div className="grid grid-cols-12 mb-52 p-10">
      <div className=" place-items-center sm:col-span-6 col-span-12 mb-[200px] sm:mb-0">
        <div
          className=" relative  sm:after:w-[500px]  after:absolute
           after:h-[620px] after:rotate-[15deg] after:rounded-[130px] after:content-[''] after:bg-opacity-10
           after:bg-lightGrey after:-top-2"
        >
          <Image
            className="contrast-125 rounded-[90px] z-10"
            src={`${basePath}/about2.png`}
            alt="banner"
            width={500}
            loading="lazy"
            height={500}
          />
          <Image
            className="h-[250px] sm:w-[250px] contrast-125 rounded-[60px] absolute -bottom-[150px] sm:-right-[100px] -right-[10px] animate-left-right object-cover"
            src={`${basePath}/about5.png`}
            alt="banner"
            width={200}
            loading="lazy"
            height={200}
          />
          <Image
            className="contrast-125 rounded-[60px] h-[250px] w-[250px] absolute -bottom-[100px] -left-[100px] animate-up-down object-cover -z-10"
            src={`${basePath}/about3.png`}
            alt="banner"
            width={200}
            loading="lazy"
            height={200}
          />
          <Image
            className="contrast-125 rounded-[30px] h-[150px] w-[150px] absolute top-[150px] -left-[200px] animate-down-up object-cover"
            src={`${basePath}/about.png`}
            alt="banner"
            width={150}
            loading="lazy"
            height={150}
          />
          {!isMobile && (
            <Image
              className="contrast-125 rounded-[20px] h-[80px] w-[80px] absolute -bottom-[150px] left-[200px] animate-down-up-slow  object-cover"
              src={`${basePath}/about4.png`}
              alt="banner"
              loading="lazy"
              width={150}
              height={150}
            />
          )}
        </div>
      </div>
      <div className="sm:col-span-6 col-span-12 sm:text-right text-center">
        <div className="sm:text-[60px] mb-4 text-[40px] font-conthrax text-white ">
          <h2 className="inline ">Collect Generation</h2>
        </div>

        <p className="sm:w-2/3 text-lightGrey">
          This market is the premier marketplace for nifties, which are digital
        </p>
        <p className="mt-6 sm:w-2/3 text-lightGrey">
          This market is the premier marketplace for nifties, which are digital
          items you can truly own for yourself This market is the premier
          marketplace for nifties, which are digital items you can truly own for
        </p>
        <p className="sm:w-2/3  text-lightGrey">
          This market is the premier marketplace for nifties, which are digital
          items you can truly own for yourself
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
