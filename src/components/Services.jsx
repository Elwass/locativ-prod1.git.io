import { useEffect, useRef, useState } from "react";
import card1 from "../assets/element1-7.png";
import card2 from "../assets/element2-7.png";

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
            : "opacity-0 translate-y-10"
        }`
      : "";

  return (
    <section
      id="services"
      className="w-full bg-[#FAFAFA] py-14 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          
          {/* CARD 1 */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            data-index="0"
            className={`relative w-full max-w-[300px] ${cardAnimation(0)}`}
          >
            <img src={card1} alt="Video" className="w-full" />
            <div className="absolute top-[10px] left-[15px] text-white font-bold text-lg">
              01.
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-lg md:text-xl font-bold mb-[95px] mr-[50px] text-white text-center">
                Video <br /> Documentation
              </h3>
              <ul className="text-xs md:text-sm space-y-2 list-disc pl-5 mb-[50px]">
                <li>After Movie Event</li>
                <li>Highlight & Recap</li>
                <li>Teaser & Reels Event</li>
                <li>Video Personal Highlight</li>
              </ul>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            data-index="1"
            className={`relative w-full max-w-[300px] ${cardAnimation(1)}`}
          >
            <img src={card2} alt="Photo" className="w-full" />
            <div className="absolute top-[10px] left-[15px] text-white font-bold text-lg">
              02.
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-lg md:text-xl font-bold mb-[105px] mr-[50px] text-white text-center">
                Photo <br /> Documentation
              </h3>
              <ul className="text-xs md:text-sm space-y-2 list-disc pl-5 mb-[70px]">
                <li>Candid & Formal</li>
                <li>Detail Event & Ambience</li>
                <li>Talent & Audience Moment</li>
              </ul>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            data-index="2"
            className={`relative w-full max-w-[300px] md:col-span-2 lg:col-span-1 md:justify-self-center ${cardAnimation(
              2
            )}`}
          >
            <img src={card1} alt="Social" className="w-full" />
            <div className="absolute top-[10px] left-[15px] text-white font-bold text-lg">
              03.
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-lg md:text-xl font-bold mb-[85px] mr-[50px] text-white text-center">
                Social Media <br /> Content
              </h3>
              <ul className="text-xs md:text-sm space-y-2 list-disc pl-5 mb-[60px]">
                <li>After Movie Event</li>
                <li>Highlight & Recap</li>
                <li>Teaser & Reels Event</li>
                <li>Video Personal Highlight</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/6288901910211"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-black text-white px-6 md:px-16 lg:px-[300px] py-[12px] text-base md:text-2xl lg:text-[30px] font-semibold whitespace-normal lg:whitespace-nowrap lg:mr-[60px]  shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl"
          >
            MULAI DARI <span className="font-extrabold mx-1">200 RIBUAN</span> AJA!
          </a>
        </div>
      </div>
    </section>
  );
}
