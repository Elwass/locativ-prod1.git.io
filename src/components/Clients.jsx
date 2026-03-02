import logo1 from "../assets/element1-2.jpg"; 
import logo2 from "../assets/element2-2.jpg";
import logo3 from "../assets/element3-2.jpg";

export default function Clients() {
  const logos = [logo1, logo2, logo3];

  return (
   <section className="bg-[#FAFAFA] py-6 md:py-10 overflow-hidden">
      <div className="relative w-full">

        <div className="flex w-max animate-scroll cursor-pointer">

          {[...logos, ...logos].map((logo, i) => {
            const isMaybank = logo === logo1;

            return (
              <div
                key={i}
                className="flex items-center justify-center min-w-[140px] md:min-w-[240px] lg:min-w-[300px] px-6 md:px-12 lg:px-16"
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  className={`
                    object-contain
                    grayscale hover:grayscale-0 transition
                    ${isMaybank 
                      ? "h-10 md:h-24 lg:h-28" 
                      : "h-6 md:h-14 lg:h-16"}
                  `}
                />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
