const BannerLeft = () => {
  return (
    <>
      <div className="text-[60px] font-conthrax text-white mt-20">
        <h1 className="inline">Collect Next Generation</h1>
        <div
          className="ml-6 inline relative after:content-['']  after:absolute after:top-16 after:left-0 after:bg-[url('/curve.png')]
        after:bg-no-repeat after:w-[300px] after:h-24"
        >
          <span className="bg-gradient-to-r from-purple600 to-purple300 bg-clip-text text-transparent">
            NFTs
          </span>
        </div>
      </div>

      <p className="mt-20 w-2/3 text-lightGrey">
        This market is the premier marketplace for nifties, which are digital
        items you can truly own for yourself
      </p>
    </>
  );
};

export default BannerLeft;
