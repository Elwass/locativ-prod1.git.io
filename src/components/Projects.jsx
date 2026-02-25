import { useRef, useEffect } from "react";
import logo from "../assets/element1-6.png";

import img1 from "../assets/element2-6.jpg";
import img2 from "../assets/element3-6.jpg";
import img3 from "../assets/element4-6.jpg";
import img4 from "../assets/element5-6.jpg";
import img5 from "../assets/element6-6.jpg";

export default function Projects() {
  const baseItems = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
  ];

  const items = Array(20).fill(baseItems).flat();

  const desktopScrollRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const progressRef = useRef(null);

  // ================= DESKTOP AUTO SCROLL =================
  useEffect(() => {
    const el = desktopScrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      el.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // ================= MOBILE AUTO SCROLL + PROGRESS =================
  useEffect(() => {
    const el = mobileScrollRef.current;
    const progressEl = progressRef.current;
    if (!el || !progressEl) return;

    // AUTO SCROLL
    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({
          left: el.clientWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    // PROGRESS TRACKER (tanpa GSAP)
    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const progress = el.scrollLeft / maxScroll;

      progressEl.style.height = `${progress * 100}%`;
      progressEl.style.transition = "height 0.4s ease-out";
    };

    el.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="bg-white w-full relative">
      
      {/* ================= MOBILE ================= */}
      <div className="md:hidden relative">

        <div className="w-full bg-[#FAFAFA] py-7 flex items-center justify-between px-5">
          <h2 className="text-2xl font-bold text-black">
            PROJEK KAMI
          </h2>
          <img src={logo} alt="Logo" className="w-14 object-contain" />
        </div>

        <div className="relative">

          <div
            ref={mobileScrollRef}
            className="w-full overflow-x-auto flex snap-x snap-mandatory scroll-smooth"
          >
            {baseItems.map((item, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-full h-[260px] relative"
              >
                <img
                  src={item.img}
                  alt="Project"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* PROGRESS BAR */}
          <div className="absolute top-0 right-0 h-full w-[4px] bg-gray-200">
            <div
              ref={progressRef}
              className="w-full bg-blue-500"
              style={{ height: "0%" }}
            />
          </div>

        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block bg-[#FAFAFA] py-14">

        <div className="max-w-7xl mx-auto px-6 mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-black">
            PROJEK KAMI
          </h2>
          <img src={logo} alt="Logo" className="w-16 object-contain" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div
            ref={desktopScrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth"
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="shrink-0 w-[280px] h-[320px] relative bg-white"
              >
                <img
                  src={item.img}
                  alt="Project"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
