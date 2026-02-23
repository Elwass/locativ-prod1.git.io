import { useRef, useState, useEffect } from "react";

import logo from "../assets/element1-6.png";

import img1 from "../assets/element2-6.jpg";
import img2 from "../assets/element3-6.jpg";
import img3 from "../assets/element4-6.png";
import img4 from "../assets/element5-6.jpg";
import img5 from "../assets/element6-6.jpg";

export default function Projects() {

  const items = [
    { img: img1, title: "Corporate", color: "bg-blue-500 text-white" },
    { img: img2, title: "Brand", color: "bg-blue-500 text-white" },
    { img: img3, title: "Private Event", color: "bg-yellow-400 text-black" },
    { img: img4, title: "Organization", color: "bg-blue-500 text-white" },
    { img: img5, title: "Sport", color: "bg-yellow-400 text-black" },
  ];

  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ================= PROGRESS =================
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollWidth = el.scrollWidth - el.clientWidth;
    const scrolled = el.scrollLeft;

    setProgress((scrolled / scrollWidth) * 100);
  };

  // ================= AUTO SNAP SCROLL =================
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % items.length;
      const width = el.clientWidth;

      el.scrollTo({
        left: nextIndex * width,
        behavior: "smooth",
      });

      setCurrentIndex(nextIndex);
    }, 3000); // 3 detik pindah

    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  return (
    <section id="projects" className="bg-white w-full relative">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden relative">

        {/* Headline */}
        <div className="w-full bg-[#FAFAFA] py-7 flex items-center justify-between px-5">
          <h2 className="text-2xl font-bold text-black">
            PROJEK KAMI
          </h2>
          <img src={logo} alt="Logo" className="w-14 object-contain" />
        </div>

        {/* Scroll Container */}
        <div className="relative">

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="
              w-full
              overflow-x-auto
              flex
              snap-x
              snap-mandatory
              scroll-smooth
            "
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="
                  snap-start
                  shrink-0
                  w-full
                  h-[260px]
                  relative
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div
                  className={`
                    absolute bottom-0 left-0 w-full
                    text-center py-3
                    text-lg font-extrabold tracking-wide
                    ${item.color}
                  `}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Progress Bar */}
          <div className="absolute right-0 top-0 h-full w-[6px] bg-gray-200">
            <div
              className="bg-blue-500 transition-all duration-300"
              style={{
                height: `${progress}%`,
              }}
            />
          </div>

        </div>
      </div>



      {/* ================= DESKTOP (TIDAK DIUBAH) ================= */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 w-full">

        <div className="relative h-[300px]">
          <img src={img1} alt="Corporate" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-3 text-xl font-extrabold">
            Corporate
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center bg-white py-12">
          <img src={logo} alt="Logo" className="w-24 mb-3" />
          <h2 className="text-4xl font-bold leading-tight">
            PROJEK <br /> KAMI
          </h2>
        </div>

        <div className="relative h-[300px]">
          <img src={img2} alt="Brand" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-3 text-xl font-extrabold">
            Brand
          </div>
        </div>

        <div className="relative h-[300px]">
          <img src={img3} alt="Private Event" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-yellow-400 text-black text-center py-3 text-xl font-extrabold">
            Private Event
          </div>
        </div>

        <div className="relative h-[300px]">
          <img src={img4} alt="Organization" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-center py-3 text-xl font-extrabold">
            Organization
          </div>
        </div>

        <div className="relative h-[300px]">
          <img src={img5} alt="Sport" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-yellow-400 text-black text-center py-3 text-xl font-extrabold">
            Sport
          </div>
        </div>

      </div>
    </section>
  );
}
