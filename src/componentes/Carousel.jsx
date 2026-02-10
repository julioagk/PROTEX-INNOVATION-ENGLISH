import Section1 from "./Section1";
import Section1Mobile from "./Section1Mobile";
import Section1b from "./Section1b";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Banner from "./Banner";
import Footer from "./Footer";

export default function HomeSections() {
    return (
      <main className="relative w-full scroll-smooth"> {/* Espacio para no tapar con la navbar */}
      

        {/* Sección 1 */}
        <section className="relative right-0 items-center justify-center w-full min-h-screen text-white bg-neutral-950">
         {/* Desktop Version */}
         <div className="hidden md:block">
            <Section1 />
         </div>
         {/* Mobile Version */}
         <div className="block md:hidden">
            <Section1Mobile />
         </div>
        </section>

        {/* Sección 1b - Why Choose Us */}
        <section className="relative items-center justify-center py-10 md:py-14 text-gray-900 bg-white">
          <Section1b />
        </section>
  
        {/* Sección 2 */}
        <section className="relative items-center justify-center py-10 md:py-14 text-white bg-gradient-to-b from-green to-green">
          <Section2 />
        </section>

  
        {/* Sección 3 */}
        <section className="relative items-center justify-center text-black bg-white">
          <Section3 />
        </section>
        {/* Footer */}
        <Footer />
      </main>
    );
  }
  