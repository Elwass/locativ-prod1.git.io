import personImg from "../assets/element1-4.png";
import checkIcon from "../assets/element2-4.jpg";
import decor from "../assets/decor10-3.png"; // ← ganti di sini
import decorLeft from "../assets/decor2-3.png";
import decorCenter from "../assets/decor1-3.png";
import decorRight from "../assets/decor3-3.png";

export default function WhyChoose() {
  return (
    <section
      className="relative bg-[#FAFAFA] py-[35px] md:py-[40px] lg:py-[45px] overflow-hidden border-t border-b border-gray-200"
    >

      {/* Decor Left */}
      <img
        src={decorRight}
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

      

      {/* Decor khusus mobile (membelakangi teks) */}
   <img
  src={decor}
  alt="Decor"
  className="
    absolute
    top-10          /* lebih naik */
    right-auto
    left-[200px]    /* geser ke kiri */
    w-[200px]
    opacity-20
    md:hidden
    z-0
  "
/>

  {/* Decor Right */}
      <img
        src={decorLeft}
        alt="Decor Right"
        className="absolute top-[80px] -right-[20px] md:-right-[40px] lg:-right-[55px] w-10 md:w-20 lg:w-20 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-[80px]">

        {/* Person Image → Hilang di mobile */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <img
            src={personImg}
            alt="Person"
            className="w-[280px] lg:w-[350px] object-contain"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[24px] md:text-[36px] lg:text-[42px] font-bold leading-tight mb-6 md:mb-8">
            <span className="block font-semibold">Mengapa Event</span>
            <span className="block">
              <span className="font-extrabold">Percaya</span>{" "}
              <span className="font-semibold">pada</span>
            </span>
            <span className="font-semibold block">LOCATIVE.ID?</span>
          </h2>

          <ul className="space-y-3 md:space-y-2 text-[14px] md:text-[16px] lg:text-[17px] text-gray-800">
            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[16px] md:w-[20px] mt-1" />
              <span>Spesialis dokumentasi event (bukan general vendor)</span>
            </li>

            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[16px] md:w-[20px] mt-1" />
              <span>Tim berpengalaman & paham flow acara</span>
            </li>

            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[16px] md:w-[20px] mt-1" />
              <span>Foto & video siap branding & publikasi</span>
            </li>

            <li className="flex items-start gap-3">
              <img src={checkIcon} className="w-[16px] md:w-[20px] mt-1" />
              <span>Editing rapi, konsisten, dan profesional</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}