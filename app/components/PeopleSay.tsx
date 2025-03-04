'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const responsive = {
  mobile: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};
const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
const PeopleSay = () => {
  const questions = [
    {
      id: 1,
      title: 'چرا باید از طراحی سه‌بعدی برای سایت خود استفاده کنم؟',
      answer:
        'طراحی سه‌بعدی باعث افزایش تعامل کاربران، ایجاد تجربه بصری جذاب‌تر و ماندگاری بیشتر در ذهن مخاطبان می‌شود.',
    },
    {
      id: 2,
      title: ' طراحی سایت بلاک‌چینی چه مزایایی دارد؟',
      answer:
        'امنیت بالا، شفافیت داده‌ها، تراکنش‌های غیرمتمرکز و امکان ایجاد پلتفرم‌های کریپتو و NFT از مزایای آن است.',
    },
    {
      id: 3,
      title: 'آیا طراحی سایت‌های شما سئو محور است؟',
      answer:
        'بله، تمامی سایت‌های ما با استانداردهای سئو طراحی شده و دارای سرعت بالا، بهینه‌سازی محتوا و ساختار اصولی برای گوگل هستند.',
    },
    {
      id: 4,
      title: ' چقدر زمان می‌برد تا سایت من طراحی و اجرا شود؟',
      answer: 'بسته به پیچیدگی پروژه، بین ۲ تا ۸ هفته زمان نیاز است.',
    },
    {
      id: 5,
      title: ' چگونه می‌توانم سفارش طراحی سایت ثبت کنم؟',
      answer:
        'کافیست با ما تماس بگیرید یا فرم درخواست مشاوره را پر کنید تا تیم ما با شما ارتباط برقرار کند.',
    },
  ];
  return (
    <>
      {/*<Carousel*/}
      {/*  responsive={{*/}
      {/*    desktop: {*/}
      {/*      breakpoint: {*/}
      {/*        max: 3000,*/}
      {/*        min: 1024,*/}
      {/*      },*/}
      {/*      items: 3,*/}
      {/*      partialVisibilityGutter: 40,*/}
      {/*    },*/}
      {/*    mobile: {*/}
      {/*      breakpoint: {*/}
      {/*        max: 464,*/}
      {/*        min: 0,*/}
      {/*      },*/}
      {/*      items: 1,*/}
      {/*      partialVisibilityGutter: 30,*/}
      {/*    },*/}
      {/*    tablet: {*/}
      {/*      breakpoint: {*/}
      {/*        max: 1024,*/}
      {/*        min: 464,*/}
      {/*      },*/}
      {/*      items: 2,*/}
      {/*      partialVisibilityGutter: 30,*/}
      {/*    },*/}
      {/*  }}*/}
      {/*  slidesToSlide={1}*/}
      {/*  swipeable*/}
      {/*>*/}
      {/*  {[1, 2, 3].map((w) => (*/}
      {/*    <div key={w} className="bg-purple900 w-20 h-20 text-white w-full">*/}
      {/*      {w}*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</Carousel>*/}
      <div className="p-4 w-full place-items-center" id="contact">
        <div className="bg-main-to-transparent text-white text-center place-items-center sm:mx-52 mx-0 sm:p-32 rounded-2xl relative">
          <h3 className=" text-[40px] sm:text-[60px]">What People Say</h3>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            infinite
            centerMode={false}
            className="h-full w-full sm:max-w-[1050px] "
            containerClass="transform-none"
            responsive={responsive}
            swipeable
            slidesToSlide={1}
          >
            {questions.map((item) => (
              <div
                className=" place-content-center place-items-center text-center  h-[600px]"
                key={item.id}
              >
                <Image
                  className="mb-10"
                  src="/assets/quote.png"
                  loading="lazy"
                  alt="about"
                  width={100}
                  height={100}
                />
                <p className="sm:max-w-[800px]  mb-10 text-2xl">{item.title}</p>
                <p className="sm:max-w-[800px] mb-10">{item.answer}</p>
                <div className=" h-[80px] w-[80px] relative mb-4">
                  <Image
                    className="rounded-full object-cover"
                    loading="lazy"
                    src="/assets/avatar1.png"
                    alt="about"
                    fill
                  />
                </div>
                <h3 className=" ">Jaconb Jones</h3>
                <p className="text-xs">Chef Product Officer</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default PeopleSay;
