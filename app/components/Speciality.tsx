'use client';
import Image from 'next/image';
import { useState } from 'react';

const Speciality = () => {
  const [isHovered, setIsHovered] = useState(false);
  const expertise = [
    {
      id: 1,
      title: 'سایت 3 بعدی',
      description: 'ایجاد تجربه‌ای جذاب و تعاملی با WebGL و Three.js',
      number: '01',
    },
    {
      id: 2,
      title: 'صرافی کریپتو',
      description:
        'پلتفرم‌های خرید و فروش ارز دیجیتال مبتنی بر بلاکچین، کیف پول‌های رمزنگاری شده و NFT ',
      number: '02',
    },
    {
      id: 3,
      title: 'فروشگاه',
      description:
        'ایجاد برندی معتبر در راستای افزایش فروش آنلاین و دیجیتال مارکتینگ هوشمند',
      number: '03',
    },
    {
      id: 4,
      title: 'هوش مصنوعی',
      description:
        'پلتفرم‌های مبتنی بر هوش مصنوعی، آنالیز دیتا، تصویر، فروش هوشمند و شخصی سازی کاربر',
      number: '04',
    },
  ];
  return (
    <div className="text-white mb-[200px] p-12 text-center">
      <div className="mb-[180px]">
        <h2 className="sm:text-[60px] text-[40px]">حوزه‌های تخصصی در 3D WEB</h2>
        <p className="text-lg">
          3DWEB is the premier marketplace for websites, digital assets and
          items you can truly own
        </p>
      </div>
      <div className="grid grid-cols-12">
        {expertise.map((item) => (
          <div className="col-span-12 sm:col-span-3" key={item.id}>
            <div
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
                    src="/assets/logo1.png"
                    alt="logo"
                    width={80}
                    height={80}
                    className="h-auto w-auto"
                  />
                </div>
              </div>
              <div className="text-center w-full">
                <h2 className="mb-3 text-[35px]   text-center ">
                  {item.title}
                </h2>
                <p>{item.description}</p>
                <h3 className=" text-[60px] opacity-10 group-hover:opacity-100 transition-opacity duration-300">
                  {item.number}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
