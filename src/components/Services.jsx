import { useEffect, useRef, useState } from "react";
import serviceCard1 from "../assets/services.png";
import serviceCard2 from "../assets/services1.png";
import decorLeft from "../assets/decor2-3.png";   // ⭐ kuning
import decorRight from "../assets/decor3-3.png";  // ⭐ biru

export default function Services() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  const cardAnimation = (index) =>
    isMobile
      ? `transition-all duration-700 ease-out ${
          visibleCards.includes(index)
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`
      : "";

  return (
    <section
      id="services"
      className="relative w-full bg-[#FAFAFA] py-14 overflow-hidden"
    >
      {/* DECOR KIRI (KUNING) */}
      <img
        src={decorLeft}
        alt="decor"
        className="pointer-events-none absolute 
           md:top-[345px] md:left-[45%] 
           top-[265px] left-[40%]
           -translate-x-1/2 -translate-y-1/2
           w-7 md:w-10
           z-20"
      />

      {/* DECOR KANAN (BIRU) */}
      <img
        src={decorRight}
        alt="decor"
        className="pointer-events-none absolute 
           md:top-[44%] md:right-[376px] 
           top-[170px] right-[17px] 
           -translate-y-1/2
           w-4 md:w-6
           z-20"
      />

      <div className="px-4">

        {/* GRID */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-3 md:gap-8">

            {/* CARD 1 */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              data-index="0"
              className={`w-full md:w-[240px] ${cardAnimation(0)}`}
            >
              <img
                src={serviceCard1}
                alt="Service 1"
                className="w-full object-contain"
              />
            </div>

            {/* CARD 2 */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              data-index="1"
              className={`w-[165px] md:w-[230px] ${cardAnimation(1)}`}
            >
              <img
                src={serviceCard2}
                alt="Service 2"
                className="w-full object-contain"
              />
            </div>

          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/6288901910211"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center 
           w-full max-w-[335px] 
           md:max-w-[480px] 
           bg-black text-white 
           py-3 
           text-sm md:text-xl 
           font-semibold 
           shadow-md 
           transition-all duration-300 
           hover:scale-105 active:scale-95
           md:ml-3
           ml-2"
          >
            <span className="md:hidden">
              MULAI <span className="font-extrabold">200</span> RIBUAN!
            </span>

            <span className="hidden md:inline">
              MULAI DARI <span className="font-extrabold">200</span> RIBUAN AJA!
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
