import { useState } from "react";

export default function Faq() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "Apakah bisa request konsep dokumentasi?",
      a: "Tentu bisa. Kami siap menyesuaikan konsep sesuai kebutuhan event kamu.",
    },
    {
      q: "Berapa lama proses editing?",
      a: "Proses editing biasanya memakan waktu 3–7 hari kerja tergantung kebutuhan.",
    },
    {
      q: "Apakah bisa cover event luar kota?",
      a: "Bisa. Kami melayani dokumentasi event di seluruh Indonesia.",
    },
    {
      q: "Apakah tersedia paket foto + video?",
      a: "Tersedia paket bundling foto dan video dengan harga lebih hemat.",
    },
  ];

  const handleQuestionClick = (index) => {
    // kalau klik yang sama → reset
    setActive(active === index ? null : index);
  };

  const handleSectionClick = () => {
    setActive(null);
  };

  return (
    <section
      className="bg-[#0f0f0f] text-white py-10 md:py-20 lg:py-24"
      onClick={handleSectionClick}
    >
      <div
        className="max-w-7xl mx-auto px-4 md:px-6"
        onClick={(e) => e.stopPropagation()}
      >

        {/* TITLE */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6">
          FREQUENTLY ASKED QUESTION
        </h2>

        {/* LINE */}
        <div className="w-full h-[1px] bg-white/60 mb-6 md:mb-12 lg:mb-14" />

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">

          {/* LEFT */}
          <div>
            {faqs.map((item, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuestionClick(i);
                }}
                className="flex items-start gap-3 mb-4 md:mb-6 cursor-pointer"
              >
                {/* NUMBER */}
                <div
                  className={`
                    w-8 h-8 md:w-10 md:h-10
                    flex items-center justify-center
                    text-xs md:text-sm font-bold
                    ${
                      active === i
                        ? "bg-blue-500 text-white"
                        : "bg-yellow-400 text-black"
                    }
                    transition-all duration-300
                  `}
                >
                  {String(i + 1).padStart(2, "0")}.
                </div>

                {/* QUESTION */}
                {active === i ? (
                  <div className="relative bg-yellow-400 text-black px-3 md:px-6 py-2 md:py-4 w-full font-semibold text-xs md:text-base">
                    <div className="absolute left-0 top-0 h-full w-[4px] md:w-[6px] bg-white" />
                    {item.q}
                  </div>
                ) : (
                  <p className="font-semibold leading-snug text-xs md:text-base">
                    {item.q}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            {active !== null && (
              <div
                className="bg-white text-black p-4 md:p-8 shadow-lg animate-faq"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="mb-3 text-sm md:text-lg">
                  {faqs[active].a}
                </p>

                <a
                  href="https://wa.me/6288901910211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-sm md:text-lg text-blue-600 hover:text-blue-700 transition"
                >
                  ▶ Diskusikan kebutuhan event kamu bersama tim kami.
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
