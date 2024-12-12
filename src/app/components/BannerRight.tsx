import { Avatar } from '@mantine/core';
import Image from 'next/image';

const BannerRight = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div
      className="relative before:w-[600px]  before:absolute
           before:h-[750px] before:-rotate-[17deg] before:rounded-[130px] before:content-[''] before:bg-opacity-10
           before:bg-lightGrey before:top-2 after:w-[600px]  after:absolute
           after:h-[750px] after:-rotate-[8deg] after:rounded-[130px] after:content-[''] after:bg-opacity-10
           after:bg-lightGrey after:top-2"
    >
      <Image
        className="contrast-125 rounded-[130px] before:w-[600px] before:z-10 before:absolute before:top-0
          before:right-0 before:h-[600px] before:-rotate-12 before:rounded-[130px] before:content-['']
           before:bg-lightGrey"
        src={`${basePath}/banner.png}`}
        alt="banner"
        width={600}
        height={700}
      />
      <div className="flex shadow-2xl items-center animate-up-down bg-white p-3 w-[250px] rounded-2xl absolute top-3/4 -left-24">
        <Avatar src="/avatar.png" />
        <div className="ml-3">
          <p className="font-conthrax">Shahrzad Gheidi</p>
          <p className="text-sm">@shahrzad98</p>
        </div>
      </div>
      <div className="flex shadow-2xl items-center animate-left-right bg-white p-3 w-[180px] rounded-2xl absolute top-1/4 left-[500px]">
        <Avatar src="/logo1.png" />
        <div className="ml-3">
          <p className="text-sm">Current Bid</p>
          <p className="font-conthrax">2.26 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default BannerRight;
