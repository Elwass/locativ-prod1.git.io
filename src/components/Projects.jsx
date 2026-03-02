import { useRef, useEffect } from "react";
import logo from "../assets/element1-6.jpg";

// ===== FOTO LAMA =====
import img1 from "../assets/element2-6.jpg";
import img2 from "../assets/element3-6.jpg";
import img3 from "../assets/element4-6.jpg";
import img4 from "../assets/element5-6.jpg";
import img5 from "../assets/element6-6.jpg";

// ===== FOTO BARU (JPG) =====
import img6 from "../assets/img2.jpg";
import img7 from "../assets/img3.jpg";
import img8 from "../assets/img4.jpg";
import img9 from "../assets/img5.jpg";
import img10 from "../assets/img6.jpg";
import img11 from "../assets/img7.jpg";
import img12 from "../assets/img8.jpg";
import img13 from "../assets/img9.jpg";
import img14 from "../assets/img10.jpg";
import img15 from "../assets/img11.jpg";
import img16 from "../assets/img12.jpg";
import img17 from "../assets/img13.jpg";
import img18 from "../assets/img14.jpg";
import img19 from "../assets/img15.jpg";
import img20 from "../assets/img16.jpg";
import img21 from "../assets/img17.jpg";
import img22 from "../assets/img18.jpg";
import img23 from "../assets/img19.jpg";
import img24 from "../assets/img20.jpg";
import img25 from "../assets/img21.jpg";
import img26 from "../assets/img22.jpg";
import img27 from "../assets/img23.jpg";
import img28 from "../assets/img24.jpg";
import img29 from "../assets/img25.jpg";
import img30 from "../assets/img26.jpg";
import img31 from "../assets/img27.jpg";
import img32 from "../assets/img28.jpg";
import img33 from "../assets/img29.jpg";

export default function Projects() {

  const baseItems = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25,
    img26, img27, img28, img29, img30,
    img31, img32, img33
  ];

  const items = Array(10).fill(baseItems).flat();

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

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const progress = el.scrollLeft / maxScroll;
      progressEl.style.height = `${progress * 100}%`;
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
            {baseItems.map((img, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-full h-[260px]"
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

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
            {items.map((img, i) => (
              <div
                key={i}
                className="shrink-0 w-[280px] h-[320px]"
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
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
