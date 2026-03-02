import decor from "../assets/decor1-1.jpg";

export default function Hero() {
  return (
<section 
     id="home"
    className="
  relative
  bg-[#0f0f0f]
  text-white
  overflow-hidden
  min-h-[50vh]  
  lg:h-[calc(100vh-100px)]
flex
items-center        /* Mobile center */
lg:items-center     /* Desktop kembali ke atas */
">


      {/* Decor */}
      <img
        src={decor}
        alt="Decor"
        className="
  absolute
  top-[200px]
  left-[20px]
  w-[30px]
  md:top-[210px]
  md:left-[80px]
  md:w-[50px]
  lg:w-[65px]
  lg:top-[280px]
  lg:left-[230px]
"

      />

      <img
        src={decor}
        alt="Decor"
        className="
  absolute
  top-[85px]
  right-[20px]
  w-[24px]
  md:top-[60px]
  md:right-[90px]
  md:w-[40px]
  lg:w-[30px]
  lg:right-[309px]
"
      />

      <img
        src={decor}
        alt="Decor"
        className="
  absolute
  top-[340px]
  right-[15px]
  w-[20px]
  md:top-[295px]
  md:right-[155px]
  md:w-[30px]
  lg:w-[20px]
  lg:right-[395px]
  lg:top-[330px]
"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0 py-8 lg:py-0 text-center w-full">

        {/* Subtitle */}
        <p className="text-base md:text-xl lg:text-[24px] mb-3 md:mb-4 mt-2 md:mt-6 lg:mt-10 opacity-90">
          Dokumentasi Event Specialist
        </p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 md:mb-6">
          JASA DOKUMENTASI <br />
          EVENT FOTO & VIDEO
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-300 mb-8 md:mb-10 px-2">
          Menangani dokumentasi Professional foto dan video <br />
          untuk berbagai jenis event Kamu.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        
        <a href="https://wa.me/6288226853276">
   <button className="bg-blue-500 hover:bg-blue-600 px-6 md:px-8 py-3 text-sm md:text-base font-semibold w-full sm:w-auto">
            Booking Tim Dokumentasi
          </button>
        </a>
       
<a href="#workflow">
  <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 md:px-8 py-3 text-sm md:text-base font-semibold transition w-full sm:w-auto">
            Pelajari Selengkapnya
          </button>
</a>
        

        </div>

      </div>
    </section>
  );
}
