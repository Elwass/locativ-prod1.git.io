export default function Footer() {
  return (
    <section id="contact">

      {/* ================= MOBILE VERSION ================= */}
      <div className="md:hidden bg-white text-black px-5 pt-8 pb-6">

        {/* Brand */}
        <div className="mb-7">
          <h3 className="font-bold text-base tracking-wide">LOCATIV.ID</h3>
          <p className="text-[13px] leading-relaxed mt-2 text-gray-700">
            LOCATIV.ID adalah Dokumentasi Event Specialist yang membantu Anda
            merekam dan mengabadikan momen penting acara melalui foto dan video
            untuk arsip, dan promosi media sosial.
          </p>
        </div>

        {/* 3 Column Section */}
        <div className="grid grid-cols-3 gap-4 mb-8 text-[11px] leading-relaxed">

          {/* Jakarta */}
          <div>
            <h4 className="font-semibold text-xs mb-2 uppercase tracking-wide">
              Jakarta
            </h4>
            <a
              href="https://maps.app.goo.gl/YbvTuf5AX4FwmNVg8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline block text-gray-700"
            >
              Available for Meeting <br />
              Centennial Tower, Gatot Subroto <br />
              Setiabudi, Jakarta 12930
            </a>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-xs mb-2 uppercase tracking-wide">
              Layanan
            </h4>
            <ul className="space-y-1 text-gray-700">
              <li>
                <a
                  href="https://wa.me/6288226853276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Dokumentasi Foto
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6288226853276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Dokumentasi Video
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs mb-2 uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-1 text-gray-700">
              <div>
                No:
                <a
                  href="https://wa.me/6288226853276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 hover:underline"
                >
                  6288226853276
                </a>
              </div>
              <div>
                IG:
                <a
                  href="https://instagram.com/locativ.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 hover:underline"
                >
                  locativ.id
                </a>
              </div>
              <div>
                TikTok:
                <a
                  href="https://www.tiktok.com/@locativ.id?_r=1&_t=ZS-945p2PH0J3V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 hover:underline"
                >
                  @locativ.id
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t pt-4 text-[11px] text-center text-gray-500 tracking-wide">
          ©2026 LOCATIV.ID. All Rights Reserved.
        </div>
      </div>



      {/* ================= DESKTOP VERSION ================= */}
      <div className="hidden md:block bg-white py-12 text-black border-t">

        <div className="max-w-4xl ml-[8%] px-8">

          {/* ROW 1 */}
          <div className="grid grid-cols-2 gap-12 mb-10">

            <div>
              <h3 className="font-semibold text-sm mb-2 tracking-wide">
                LOCATIV.ID
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                LOCATIV.ID adalah Dokumentasi Event Specialist yang membantu Anda
                merekam dan mengabadikan momen penting acara melalui foto dan video
                untuk arsip, dan promosi media sosial.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2 tracking-wide">
                Jakarta
              </h3>
              <a
                href="https://maps.app.goo.gl/YbvTuf5AX4FwmNVg8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-relaxed text-gray-700 hover:underline block"
              >
                Available for Meeting <br />
                Centennial Tower, Gatot Subroto <br />
                Setiabudi, Jakarta 12930
              </a>
            </div>

          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-2 gap-12">

            <div>
              <h3 className="font-semibold text-sm mb-2 tracking-wide">
                Layanan
              </h3>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>
                  <a href="https://wa.me/6288226853276" className="hover:underline">
                    Dokumentasi Foto
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6288226853276" className="hover:underline">
                    Dokumentasi Video
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2 tracking-wide">
                Contact
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                No:
                <a href="https://wa.me/6288226853276" className="ml-1 hover:underline">
                  6288226853276
                </a>
                <br />
                IG:
                <a href="https://instagram.com/locativ.id" className="ml-1 hover:underline">
                  locativ.id
                </a>
                <br />
                TikTok:
                <a href="https://www.tiktok.com/@locativ.id?_r=1&_t=ZS-945p2PH0J3V" className="ml-1 hover:underline">
                  @locativ.id
                </a>
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
