'use client';
import { Avatar } from '@mantine/core';
import Image from 'next/image';
import { useBreakpoint } from '@/hooks/useBreakPoint';

const BannerLeft = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { isMobile } = useBreakpoint();
  return (
    <div className="relative">
      <div className="sm:w-[600px] w-3/4 relative m-auto">
        {!isMobile && (
          <div
            className="sm:before:w-full before:absolute
           before:h-[750px] before:-rotate-[17deg] before:rounded-[130px] before:content-[''] before:bg-opacity-10
           before:bg-lightGrey before:top-2 sm:after:w-full  after:absolute
           after:h-[750px] after:-rotate-[8deg] after:rounded-[130px] after:content-[''] after:bg-opacity-10
           after:bg-lightGrey after:top-2"
          />
        )}
        <Image
          className="contrast-125 sm:rounded-[130px] rounded-[50px] "
          src={`${basePath}/assets/banner.png`}
          alt="banner"
          width={600}
          height={700}
          loading="lazy"
        />
      </div>
      <div className="flex shadow-2xl items-center animate-up-down bg-white p-3 sm:w-[250px] rounded-2xl absolute top-3/4 sm:-left-24">
        <Avatar src="/assets/avatar.png" />
        <div className="ml-3">
          <p className="">Shahrzad Gheidi</p>
          <p className="text-sm">@shahrzad98</p>
        </div>
      </div>
      <div className="flex shadow-2xl items-center animate-left-right bg-white p-3 w-[180px] rounded-2xl absolute top-1/4 sm:left-[500px] left-1/2">
        <Avatar src="/assets/logo1.png" />
        <div className="ml-3">
          <p className="text-sm">Current Bid</p>
          <p className="">2.26 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default BannerLeft;
