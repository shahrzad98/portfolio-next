import BannerLeft from '../components/BannerLeft';
import BannerRight from '../components/BannerRight';
import AboutUs from '@/components/About';
import Speciality from '@/components/Speciality';
import Services from '@/components/Services';
import Members from '@/components/Members';
import FAQ from '@/components/FAQ';
import PeopleSay from '@/components/PeopleSay';
import Head from 'next/head';

export const metadata = {
  title: 'طراحی سایت | خدمات طراحی سایت حرفه‌ای',
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
      <Head>
        <title>طراحی سایت حرفه‌ای | خدمات طراحی سایت با نکست جی اس</title>
        <meta
          name="description"
          content="ارائه خدمات طراحی سایت حرفه‌ای با استفاده از نکست جی اس، سئو بهینه و طراحی ریسپانسیو"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="طراحی سایت حرفه‌ای" />
        <meta
          property="og:description"
          content="بهترین خدمات طراحی سایت برای کسب و کارهای آنلاین"
        />
        <meta property="og:type" content="website" />
      </Head>
      <h1 className="select-none">طراحی سایت حرفه‌ای</h1>
      <div className="grid grid-cols-12 sm:gap-x-20 sm:px-12 px-4 place-items-center mt-12 mb-[200px]">
        <div className="col-span-12 sm:col-span-6 sm:mb-0 mb-20 sm:text-left text-center ">
          <BannerLeft />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <BannerRight />
        </div>
      </div>
      <AboutUs />
      <Speciality />
      <div className="bg-[url(/bg-svg.png)]">
        <Services />
        <Members />
      </div>
      <FAQ />
      <PeopleSay />
    </>
  );
}
