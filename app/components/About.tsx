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
            src={`${basePath}/assets/about2.png`}
            alt="banner"
            width={500}
            loading="lazy"
            height={500}
          />
          <Image
            className="h-[250px] sm:w-[250px] contrast-125 rounded-[60px] absolute -bottom-[150px] sm:-right-[100px] -right-[10px] animate-left-right object-cover"
            src={`${basePath}/assets/about5.png`}
            alt="banner"
            width={200}
            loading="lazy"
            height={200}
          />
          <Image
            className="contrast-125 rounded-[60px] h-[250px] w-[250px] absolute -bottom-[100px] -left-[100px] animate-up-down object-cover -z-10"
            src={`${basePath}/assets/about3.png`}
            alt="banner"
            width={200}
            loading="lazy"
            height={200}
          />
          <Image
            className="contrast-125 rounded-[30px] h-[150px] w-[150px] absolute top-[150px] -left-[200px] animate-down-up object-cover"
            src={`${basePath}/assets/about.png`}
            alt="banner"
            width={150}
            loading="lazy"
            height={150}
          />
          {!isMobile && (
            <Image
              className="contrast-125 rounded-[20px] h-[80px] w-[80px] absolute -bottom-[150px] left-[200px] animate-down-up-slow  object-cover"
              src={`${basePath}/assets/about4.png`}
              alt="banner"
              loading="lazy"
              width={150}
              height={150}
            />
          )}
        </div>
      </div>
      <div className="sm:col-span-6 col-span-12 sm:text-right text-center">
        <div className="sm:text-[60px] mb-4 text-[40px]  text-white ">
          <h2 className="inline ">نسل جدید وب</h2>
        </div>

        <p className="sm:w-2/3 text-lightGrey text-2xl">
          ما تجربه کاربری را متحول می‌کنیم! در 3DWEB خدماتی ارائه می‌دهیم که
          سایت شما را به سطح جدیدی ارتقا می دهد:
        </p>
        <p className="mt-6 sm:w-2/3 text-lightGrey">
          طراحی سایت سه‌بعدی (3D Web Design) – تجربه‌ای بصری و پویا با
          گرافیک‌های سه‌بعدی مدرن
        </p>
        <p className="mt-6 sm:w-2/3 text-lightGrey">
          طراحی سایت بلاک‌چینی و کریپتو – مناسب برای صرافی‌های ارز دیجیتال، NFT
          و پلتفرم‌های DeFi
        </p>
        <p className="mt-6 sm:w-2/3 text-lightGrey">
          هوش مصنوعی در طراحی سایت – خودکارسازی فرآیندها و ارائه تجربه کاربری
          هوشمند
        </p>
        <p className="mt-6 sm:w-2/3 text-lightGrey">
          با ما همراه شوید و سایتی بسازید که از رقبا متمایز باشد!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
