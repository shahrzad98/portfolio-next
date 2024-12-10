import BannerRight from '@/app/components/BannerRight';
import BannerLeft from '@/app/components/BannerLeft';

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-x-16 w-full m-24 px-12 ">
      <div className="col-span-6">
        <BannerLeft />
      </div>
      <div className="col-span-6">
        <BannerRight />
      </div>
    </div>
  );
}
