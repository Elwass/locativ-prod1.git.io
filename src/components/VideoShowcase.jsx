export default function VideoShowcase() {
  return (
    <section className="w-full bg-[#0f0f0f] py-14 md:py-15 lg:py-20">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Headline */}
        <div className="mb-10 md:mb-14">
          <h2 className=" text-center
          text-[24px]
          md:text-[42px]
          lg:text-[50px]
          font-bold
          mb-8 md:mb-14 lg:mb-16
          text-white">
            VIDEO SHOWCASE
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* CARD 1 */}
<div className="relative rounded-xl overflow-hidden shadow-lg bg-black h-[260px] md:h-[220px] lg:h-[260px]">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/r8-lDBEWRHI?autoplay=1&mute=1&loop=1&playlist=r8-lDBEWRHI&controls=1&modestbranding=1&rel=0&playsinline=1"
    title="Video 1"
    allow="autoplay; fullscreen; encrypted-media"
    allowFullScreen
  />
</div>

          {/* CARD 2 */}
        {/* CARD 2 */}
<div className="relative rounded-xl overflow-hidden shadow-lg bg-black h-[260px] md:h-[220px] lg:h-[260px]">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/h8KZ3A7FLCk?autoplay=1&mute=1&loop=1&playlist=h8KZ3A7FLCk&controls=1&modestbranding=1&rel=0&playsinline=1"
    title="Video 2"
    allow="autoplay; fullscreen; encrypted-media"
    allowFullScreen
  />
</div>

          {/* CARD 3 (Kosong dulu) */}
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 to-black flex items-center justify-center h-[260px] md:h-[220px] lg:h-[260px]">
            <span className="text-gray-400 text-lg">
              Coming Soon
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}