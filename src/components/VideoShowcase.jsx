  import { useState, useRef } from "react";
import logo from "../assets/element1-6.png";

export default function VideoShowcase() {
  const [hoveredId, setHoveredId] = useState(null);
  const fullscreenRef = useRef(null);

  const videos = [
    {
      id: "r8-lDBEWRHI",
      title: "Locativ - Dokumentasi Birthday Event",
    },
    {
      id: "h8KZ3A7FLCk",
      title: "Locativ - Dokumentasi Basket Ball Event EXSO CUP",
    },
    {
      id: "QZeCLovryCk",
      title: "Locativ - Padel Young Living",
    },
    {
      id: "XtgOSWWGw-k",
      title: "Locativ - Outbound Hevinex Bhumi Bambu",
    },
    {
      id: "XikIX418qyA",
      title: "Locativ - Family Gathering Goes To Semarang",
    },
    {
      id: "bExW839K3uA",
      title: "Locativ - Gathering Family KSP Mahakarya",
    },
  ];

  const handleFullscreen = (videoId) => {
    const container = fullscreenRef.current;
    if (!container) return;

    container.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0"
        frameborder="0"
        allow="autoplay; fullscreen; encrypted-media"
        allowfullscreen
        style="width:100%; height:100%;"
      ></iframe>
    `;

    container.style.display = "block";

    if (container.requestFullscreen) {
      container.requestFullscreen();
    }
  };

  return (
    <>
      <section className="w-full bg-[#0f0f0f] py-8 md:py-14">
        <div className="md:max-w-7xl md:mx-auto md:px-4">

          {/* Headline */}
          <div className="w-full bg-black py-7 flex items-center justify-between px-5 mb-8">
            <h2 className="text-2xl font-bold text-white">
              VIDEO SHOWCASE
            </h2>

            <img
              src={logo}
              alt="Logo"
              className="w-14 object-contain"
            />
          </div>

          {/* Video Cards */}
          <div className="flex overflow-x-auto gap-5 px-5 md:px-0">
            {videos.map((video) => (
              <div
                key={video.id}
                className="shrink-0 w-[85%] md:w-[32%] cursor-pointer"
                onMouseEnter={() => setHoveredId(video.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleFullscreen(video.id)}
              >
                <div className="rounded-2xl overflow-hidden bg-black relative">

                  {hoveredId === video.id ? (
                    <iframe
                      className="w-full h-[200px] md:h-[240px]"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=1&rel=0`}
                      title={video.title}
                      allow="autoplay; encrypted-media"
                    />
                  ) : (
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                      alt={video.title}
                      className="w-full h-[200px] md:h-[240px] object-cover"
                    />
                  )}
                </div>

                <h3 className="text-white text-sm md:text-base font-semibold mt-3 leading-snug">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Container */}
      <div
        ref={fullscreenRef}
        className="fixed inset-0 bg-black hidden"
      />
    </>
  );
}
