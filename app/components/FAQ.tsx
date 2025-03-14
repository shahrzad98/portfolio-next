'use client';
import { useEffect, useRef, useState } from 'react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`mb-32 text-white text-center transition-all ease-in-out duration-1000
       ${scrollDirection == 'down' && isVisible ? 'translate-y-10 opacity-100' : '-translate-y-10 opacity-0'}
        `}
    >
      <h2 ref={ref} className="text-[30px] sm:text-[60px] ">
        سوالات متداول
      </h2>
      <p className="text-[30px]">
        Below is a list of frequently asked questions and answers from partners
      </p>
    </div>
  );
};

export default FAQ;
