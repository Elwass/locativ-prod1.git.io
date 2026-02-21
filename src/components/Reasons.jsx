import decorLeft from "../assets/decor2-3.png";
import decorCenter from "../assets/decor1-3.png";
import decorRight from "../assets/decor3-3.png";
import crossIcon from "../assets/element1-3.png";

export default function Reasons() {
  return (
    <section
      id="reasons"
      className="relative bg-[#FAFAFA] py-10 md:py-20 lg:py-24 overflow-hidden"
    >
     {/* Decor Left */}
<img
  src={decorLeft}
  alt="Decor Left"
  className="
    absolute
    top-[20px]        /* MOBILE dinaikkan */
    left-[10px]
    md:top-[60px]     /* Tablet tetap */
    md:left-[50px]
    lg:top-[75px]     /* Desktop tetap */
    lg:left-[100px]
    w-[16px]
    md:w-[26px]
    lg:w-[30px]
    z-0
  "
/>

      {/* Decor Center (Behind Content on Mobile) */}
      <img
        src={decorCenter}
        alt="Decor Center"
        className="
          absolute
          top-1/2
          left-[50%]
          md:right-[2%]
          lg:right-[15%]
          -translate-y-1/2
          w-[200px]
          md:w-[300px]
          lg:w-[390px]
          opacity-20
          md:opacity-90
          z-0
        "
      />

      {/* Decor Right */}
      <img
        src={decorRight}
        alt="Decor Right"
        className="absolute top-[80px] -right-[20px] md:-right-[40px] lg:-right-[55px] w-10 md:w-20 lg:w-20 z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

        <div className="pl-1 md:pl-10 lg:pl-40">

          {/* Heading (Smaller on Mobile) */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-5 md:mb-8 leading-tight">
            <span className="block font-semibold">Alasan Kenapa</span>

            <div className="flex gap-2">
              <span className="font-semibold">Kamu</span>
              <span className="font-extrabold">Butuh</span>
            </div>

            <span className="block font-semibold">Dokumentasi</span>
          </h2>

          {/* List (Compact on Mobile) */}
          <ul className="space-y-3 md:space-y-5 text-xs md:text-base text-gray-800">
            <li className="flex items-start gap-3">
              <img src={crossIcon} className="w-3 md:w-5 mt-1" />
              <span>Momen penting event terlewat</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={crossIcon} className="w-3 md:w-5 mt-1" />
              <span>Foto & video kurang profesional</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={crossIcon} className="w-3 md:w-5 mt-1" />
              <span>Hasil dokumentasi tidak layak dipakai untuk promosi</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={crossIcon} className="w-3 md:w-5 mt-1" />
              <span>Tim datang tapi tidak paham alur event</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={crossIcon} className="w-3 md:w-5 mt-1" />
              <span>Dokumentasi selesai, tapi ceritanya tidak terasa</span>
            </li>
          </ul>

        </div>

        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}