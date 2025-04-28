'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Divider } from '@mantine/core';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const useCases = [
    {
      id: 1,
      title: 'چت‌بات‌های هوشمند ',
      description: 'پشتیبانی ۲۴/۷ برای پاسخگویی خودکار به مشتریان',
      icon: '/icon/icon-1.svg',
    },
    {
      id: 2,
      title: ' تحلیل رفتار کاربران',
      description: ' بهینه‌سازی تجربه کاربری بر اساس داده‌های واقعی',
      icon: '/icon/icon-2.svg',
    },
    {
      id: 3,
      title: 'بهینه‌سازی سئو با AI',
      description: 'پیشنهاد کلمات کلیدی و تولید محتوای بهینه‌شده برای گوگل',
      icon: '/icon/icon-3.svg',
    },
    {
      id: 4,
      title: 'تولید خودکار تصاویر و ویدیوهای سه‌بعدی',
      description:
        'ایجاد محتوای بصری حرفه‌ای با استفاده از الگوریتم‌های یادگیری عمیق',
      icon: '/icon/icon-4.svg',
    },
  ];
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
    <div className="text-white place-items-center text-right relative mb-24 p-6">
      <div className="bg-gradient-circle sm:w-[1000px] h-[1000px] absolute -left-[500px] -top-[300px] rounded-full -z-10" />
      <h2 className=" text-[50px]  sm:w-[700px] text-center">
        هوش مصنوعی در 3D WEB
      </h2>
      <div className="flex sm:flex-row flex-col-reverse">
        <div className="h-auto w-auto">
          <Image
            ref={ref}
            className={`h-auto w-auto animate-left-right-slow transition-opacity duration-500 h-auto w-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            src="/assets/portfolio.png"
            width={700}
            loading="lazy"
            height={700}
            alt="portfolio"
          />
        </div>
        <div className="sm:ml-20 mt-20">
          {useCases.map((item) => (
            <div
              key={item.id}
              className="flex bg-main-to-transparent py-10 px-6 mb-6 rounded-2xl"
            >
              <Image
                className="ml-4 self-start h-auto w-auto"
                src={item.icon}
                alt="icon"
                loading="lazy"
                width={50}
                height={50}
              />
              <Divider orientation="vertical" className="h-[100px]" />
              <div className="mr-6">
                <h2 className=" text-[30px]">{item.title}</h2>
                <p className="sm:w-[550px]">{item.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
