import Image from 'next/image';

const PeopleSay = () => {
  return (
    <div className="p-6 w-full place-items-center">
      <div className="sm:max-w-[1200px] bg-main-to-transparent text-white text-center place-items-center sm:mx-52 mx-0 sm:p-32 rounded-2xl relative">
        <h3 className="font-conthrax text-[40px] sm:text-[60px] mb-10">
          What People Say
        </h3>
        <Image
          className="mb-10"
          src="/quote.png"
          loading="lazy"
          alt="about"
          width={100}
          height={100}
        />
        <p className="sm:max-w-[800px] mb-10">
          “ Curabitur eu est feugiat quam feugiat tristique non vel erat. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Quisque congue, nunc nec suscipit fringilla, augue ligula
          eleifend velit.“
        </p>
        <div className=" h-[80px] w-[80px] relative mb-4">
          <Image
            className="rounded-full object-cover"
            loading="lazy"
            src="/avatar1.png"
            alt="about"
            fill
          />
        </div>
        <h3 className="font-conthrax ">Jaconb Jones</h3>
        <p className="text-xs">Chef Product Officer</p>
      </div>
    </div>
  );
};

export default PeopleSay;
