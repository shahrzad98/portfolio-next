'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useClient } from '@/hooks/useClient';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
const Members = () => {
  const { isClient } = useClient();
  const [isMemberFocused, setIsMemberFocused] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  if (!isClient) return null;
  return (
    <div className="text-white place-items-center text-center mb-32 p-6">
      <h2 className="font-conthrax text-[40px] sm:text-[60px] max-w-[800px] mb-6">
        Our Amazing Team Members
      </h2>
      <Carousel
        arrows={false}
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        centerMode={false}
        className="h-full w-full sm:max-w-[1050px]"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={3}
        swipeable
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            onMouseEnter={() => setIsMemberFocused(true)}
            onMouseLeave={() => setIsMemberFocused(false)}
            className="border border-darkGrey rounded-xl p-4 border-opacity-50 relative  mr-6"
          >
            <div
              className={`bg-light-to-transparent w-full h-full absolute top-0 left-0 z-10 rounded-xl
            animate-ping  animate-left-right-member blur-2xl ${isMemberFocused ? 'animate-left-right-member opacity-100 animate-ping' : 'opacity-0'}`}
            />
            <div className=" relative w-[200px] h-[200px]">
              <Image
                src="/member2.png"
                alt="member"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Members;
