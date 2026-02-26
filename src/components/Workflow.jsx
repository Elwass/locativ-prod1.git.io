import iconBg from "../assets/element1-5.png";
import decorTop from "../assets/decor1-5.png";
import decorBottom from "../assets/decor2-5.png";

export default function Workflow() {
  return (
    <section id="workflow" className="relative bg-[#FAFAFA] py-[35px] md:py-[65px] lg:py-[80px] overflow-hidden">

      {/* Decor Top */}
      <img
        src={decorTop}
        alt="Decor Top"
        className="
          absolute
          top-[40px]
          left-[15px]
          md:left-[60px]
          lg:top-[130px]
          lg:left-[125px]
          w-[12px]
          md:w-[18px]
          lg:w-[20px]
          opacity-80
        "
      />

      {/* Decor Bottom */}
      <img
        src={decorBottom}
        alt="Decor Bottom"
        className="
          absolute
          bottom-[40px]
          right-[15px]
          md:right-[100px]
          lg:bottom-[130px]
          lg:right-[300px]
          w-[14px]
          md:w-[24px]
          lg:w-[30px]
          opacity-80
        "
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <h2 className="
          text-center
          text-[24px]
          md:text-[42px]
          lg:text-[50px]
          font-bold
          mb-8 md:mb-14 lg:mb-16
        ">
          CARA KERJA KAMI
        </h2>

        {/* Steps */}
        <div className="space-y-6 md:space-y-10">

          {[
            {
              num: "01.",
              title: "Brief & Kebutuhan Event",
              desc: "Diskusi konsep, rundown, dan tujuan dokumentasi.",
            },
            {
              num: "02.",
              title: "Execution Day",
              desc: "Dokumentasi rapi tanpa mengganggu jalannya acara.",
            },
            {
              num: "03.",
              title: "Editing & Delivery",
              desc: "Hasil sesuai brief, siap digunakan.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex
                flex-col
                sm:flex-row
                items-start
                gap-3
                sm:gap-8
              "
            >

              {/* Number Box */}
              <div className="
                relative
                w-[110px]
                h-[48px]
                md:w-[160px]
                md:h-[62px]
                lg:w-[180px]
                lg:h-[70px]
                flex-shrink-0
              ">
                <img
                  src={iconBg}
                  alt="Icon"
                  className="w-full h-full object-contain"
                />
                <span className="
                  absolute inset-0
                  flex items-center justify-center
                  text-white
                  font-bold
                  text-sm
                  md:text-base
                ">
                  {item.num}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="
                  font-bold
                  text-[16px]
                  md:text-2xl
                  lg:text-3xl
                ">
                  {item.title}
                </h3>

                <p className="
                  text-gray-600
                  leading-relaxed
                  max-w-xl
                  text-[13px]
                  md:text-base
                  mt-1
                ">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
