import adds from "../assets/adds.mp4";
import decorLeft from "../assets/decor2-3.png";
import decorRight from "../assets/decor3-3.png";
import crossIcon from "../assets/element1-3.png";

export default function Reasons() {
  return (
    <section
      id="reasons"
      className="relative bg-[#FAFAFA] py-[35px] md:py-[40px] lg:py-[45px] overflow-hidden border-t border-b border-gray-200"
    >

      {/* ================= MOBILE BACKGROUND VIDEO (CINEMATIC) ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none lg:hidden">
        <video
          src={adds}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay biar teks kontras */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* ================= DESKTOP RIGHT VIDEO (TETAP) ================= */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full z-0">
        <video
          src={adds}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* ================= DECOR ================= */}
      <img
        src={decorLeft}
        alt="Decor Left"
        className="
          absolute
          top-[20px]
          left-[10px]
          md:top-[60px]
          md:left-[50px]
          lg:top-[75px]
          lg:left-[100px]
          w-[16px]
          md:w-[26px]
          lg:w-[30px]
          z-20
        "
      />

      <img
        src={decorRight}
        alt="Decor Right"
        className="
          absolute
          top-[80px]
          -right-[20px]
          md:-right-[40px]
          lg:-right-[55px]
          w-10
          md:w-20
          lg:w-20
          z-20
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-30 max-w-7xl mx-auto px-5 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-[80px] items-center">

        {/* TEXT */}
        <div className="pl-1 md:pl-10 lg:pl-40">

          <h2 className="text-[26px] md:text-[36px] lg:text-[42px] font-bold leading-tight mb-6 md:mb-8 text-white lg:text-gray-800">
            <span className="block font-semibold">Alasan Kenapa</span>
            <span className="block">
              <span className="font-semibold">Kamu</span>{" "}
              <span className="font-extrabold">Butuh</span>
            </span>
            <span className="block font-semibold">Dokumentasi</span>
          </h2>

          <ul className="space-y-4 md:space-y-2 text-[15px] md:text-[16px] lg:text-[17px] text-white lg:text-gray-800">
            <li className="flex items-start gap-3">
              <img src={crossIcon} className="w-[18px] md:w-[20px] mt-1" />
              <span>Momen penting event terlewat</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={crossIcon} className="w-[18px] md:w-[20px] mt-1" />
              <span>Foto & video kurang profesional</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={crossIcon} className="w-[18px] md:w-[20px] mt-1" />
              <span>Hasil dokumentasi tidak layak dipakai untuk promosi</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={crossIcon} className="w-[18px] md:w-[20px] mt-1" />
              <span>Tim datang tapi tidak paham alur event</span>
            </li>
            <li className="flex items-start gap-3">
              <img src={crossIcon} className="w-[18px] md:w-[20px] mt-1" />
              <span>Dokumentasi selesai, tapi ceritanya tidak terasa</span>
            </li>
          </ul>

        </div>

        <div className="hidden md:block"></div>

      </div>

    </section>
  );
}
