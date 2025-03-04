const BannerRight = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:text-[60px] text-[40px]  text-white mt-20 ">
        <h1 className="inline">
          طراحی سایت سه‌بعدی، انیمیشن، سئو، فروشگاهی و بلاک‌چین
        </h1>
        <div
          className="ml-6 inline relative after:content-['']  after:absolute after:top-16 after:left-0 after:bg-[url('/curve.png')]
        after:bg-no-repeat sm:after:w-full  after:h-24"
        >
          <span className="bg-gradient-to-r from-purple600 to-purple300 bg-clip-text text-transparent ml-20">
            NFTs
          </span>
        </div>
      </div>

      <p className="mt-20 sm:w-2/3 text-lightGrey text-lg">
        <h2 className="text-[30px]  mb-4">
          به دنبال طراحی سایتی متفاوت و حرفه‌ای هستید؟
        </h2>
        ما در 3DWEB با استفاده از طراحی سه‌بعدی، بلاک‌چین و هوش مصنوعی،
        وبسایت‌هایی منحصر‌به‌فرد، سریع و سئو محور می‌سازیم. همین امروز سایت خود
        را با جدیدترین متدهای طراحی توسعه دهید!
      </p>
    </>
  );
};

export default BannerRight;
