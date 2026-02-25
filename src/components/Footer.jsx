export default function Footer() {
  return (
    <section id="contact">

      {/* ================= MOBILE VERSION ================= */}
      <div className="md:hidden bg-white text-black px-5 pt-8 pb-6">

        {/* ROW 1 - BRAND */}
        <div className="mb-6">
          <h3 className="font-bold text-base">LOCATIVE.ID</h3>
          <p className="text-sm leading-tight">
            Dokumentasi Event <br />
            Specialist
          </p>
        </div>

        {/* ROW 2 - JAKARTA & PURWOKERTO */}
        <div className="flex justify-between gap-6 mb-6 text-sm">

          <div className="w-1/2">
            <h4 className="font-bold mb-1">Jakarta</h4>
            <a
              href="https://maps.app.goo.gl/YbvTuf5AX4FwmNVg8"
              target="_blank"
              rel="noopener noreferrer"
              className="leading-tight hover:underline block"
            >
              Available for Meeting <br />
              Centennial Tower, Gatot Subroto <br />
              Setiabudi, Jakarta 12930
            </a>
          </div>

          <div className="w-1/2">
            <h4 className="font-bold mb-1">Purwokerto</h4>
            <a
              href="https://maps.app.goo.gl/vvZuGxHogr6Jzkjt9"
              target="_blank"
              rel="noopener noreferrer"
              className="leading-tight hover:underline block"
            >
              Sapphire Mansion A4 <br />
              Karangrau, Sokaraja <br />
              Banyumas 53181
            </a>
          </div>

        </div>

        {/* ROW 3 - LAYANAN & CONTACT */}
        <div className="flex justify-between gap-6 mb-8 text-sm">

          <div className="w-1/2">
            <h4 className="font-bold mb-1">Layanan</h4>
            <ul className="leading-tight space-y-1">
              <li>
                <a
                  href="https://wa.me/6288901910211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Dokumentasi Foto
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6288901910211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Dokumentasi Video
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6288901910211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  After Movie
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6288901910211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Social Media Content
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2">
            <h4 className="font-bold mb-1">Contact</h4>
            <p className="leading-tight">
              No :
            
              <a
                href="https://wa.me/6288901910211"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                6288901910211
              </a>
              <br />
              Facebook : <a href="https://www.facebook.com/share/1DMrkRhbfX/?mibextid=wwXIfr"
              target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline ml-1">Locativ.id</a>
              <br />
              IG :
              <a
                href="https://instagram.com/locativ.id"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline ml-1"
              >
                locativ.id
              </a>
              <br />
              TikTok :
              <a
                href="https://www.tiktok.com/@locativ.id?_r=1&_t=ZS-945p2PH0J3V"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline ml-1"
              >
                @locativ.id
              </a>
            </p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t pt-4 text-xs text-center text-gray-500">
          ©2026 LOCATIVE.ID. All Rights Reserved.
        </div>

      </div>


      {/* ================= DESKTOP VERSION ================= */}
      <div className="hidden md:block bg-white py-6 text-black border-t overflow-hidden">

        <div className="max-w-4xl mx-auto px-4 md:px-2 lg:px-1 md:ml-[10px] lg:ml-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">

            <div>
              <h3 className="font-bold text-sm mb-1">LOCATIVE.ID</h3>
              <p className="text-xs leading-tight">
                Dokumentasi Event <br />
                Specialist
              </p>
            </div>

            <div>
              <div className="mb-3">
                <h3 className="font-bold text-sm mb-1">Jakarta</h3>
                <a
                  href="https://maps.app.goo.gl/YbvTuf5AX4FwmNVg8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs leading-tight hover:underline block"
                >
                  Available for Meeting <br />
                  Centennial Tower, Gatot Subroto <br />
                  Setiabudi, Jakarta 12930
                </a>
              </div>

              <div>
                <h3 className="font-bold text-sm mb-1">Purwokerto</h3>
                <a
                  href="https://maps.app.goo.gl/vvZuGxHogr6Jzkjt9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs leading-tight hover:underline block"
                >
                  Sapphire Mansion A4 <br />
                  Karangrau, Sokaraja <br />
                  Banyumas 53181
                </a>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <h3 className="font-bold text-sm mb-1">Layanan</h3>
                <ul className="text-xs space-y-1">
                  <li><a href="https://wa.me/6288901910211" target="_blank" rel="noopener noreferrer" className="hover:underline">Dokumentasi Foto</a></li>
                  <li><a href="https://wa.me/6288901910211" target="_blank" rel="noopener noreferrer" className="hover:underline">Dokumentasi Video</a></li>
                  <li><a href="https://wa.me/6288901910211" target="_blank" rel="noopener noreferrer" className="hover:underline">After Movie</a></li>
                  <li><a href="https://wa.me/6288901910211" target="_blank" rel="noopener noreferrer" className="hover:underline">Social Media Content</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-sm mb-1">Contact</h3>
                <p className="text-xs leading-tight">
                  No :
                  <a href="https://wa.me/6288901910211" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">
                    6288901910211
                  </a>
                  <br />
                  IG :
                  <a href="https://instagram.com/locativ.id" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">
                    locativ.id
                  </a>
                  <br />
                  TikTok :
                  <a href="https://www.tiktok.com/@locativ.id?_r=1&_t=ZS-945p2PH0J3V" target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">
                    @locativ.id
                  </a>
                </p>
              </div>
            </div>

          </div>



        </div>
      </div>

    </section>
  );
}
