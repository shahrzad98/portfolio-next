import BannerLeft from './components/BannerLeft';
import BannerRight from './components/BannerRight';
import AboutUs from '@/components/About';
import Speciality from '@/components/Speciality';
import Services from '@/components/Services';
import Members from '@/components/Members';
import FAQ from '@/components/FAQ';
import PeopleSay from '@/components/PeopleSay';

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'web-design-services' } }],
    fallback: false,
  };
}

export default function Home() {
  return (
    <>
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
