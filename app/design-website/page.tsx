export const revalidate = 3600;
import BannerRight from '../components/BannerRight';
import BannerLeft from '../components/BannerLeft';
import AboutUs from '@/components/About';
import Speciality from '@/components/Speciality';
import Services from '@/components/Services';
import Members from '@/components/Members';
import FAQ from '@/components/FAQ';
import PeopleSay from '@/components/PeopleSay';

export const metadata = {
  title: 'طراحی سایت | خدمات سایت حرفه‌ای',
  description:
    'ما با طراحی سایت حرفه‌ای و بهینه‌سازی برای موتورهای جستجو، کسب‌وکار شما را رشد می‌دهیم.',
  keywords: ['طراحی سایت', 'طراحی وب', 'سئو سایت', 'بهینه سازی سایت'],
  openGraph: {
    title: 'طراحی سایت | خدمات طراحی سایت حرفه‌ای',
    description: 'ما بهترین خدمات طراحی سایت را ارائه می‌دهیم.',
    url: 'https://www.3dweb.asia',
    siteName: '3DWEB',
    images: [
      {
        url: 'https://www.3dweb.asia/banner.png',
        width: 1200,
        height: 630,
        alt: 'طراحی سایت حرفه‌ای',
      },
    ],
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 sm:gap-x-20 sm:px-12 px-4 place-items-center mt-12 mb-[200px] ">
        <div className="col-span-12 sm:col-span-6 sm:mb-0 mb-20 sm:text-right text-center ">
          <BannerRight />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <BannerLeft />
        </div>
      </div>
      <div className="overflow-x-hidden">
        <AboutUs />
        <Speciality />
        <div className="bg-[url(/bg-svg.png)]">
          <Services />
          <Members />
        </div>
        <FAQ />
        <PeopleSay />
      </div>
    </>
  );
}
