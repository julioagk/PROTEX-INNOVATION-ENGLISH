import Section1 from "./Section1";
import Section1Mobile from "./Section1Mobile";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Banner from "./Banner";
import Footer from "./Footer";

export default function HomeSections() {
    return (
      <main className="static left-0 w-full h-screen snap-y snap-mandatory scroll-smooth"> {/* Espacio para no tapar con la navbar */}
      

        {/* Sección 1 */}
        <section className="relative right-0 items-center justify-center w-full min-h-screen text-white bg-neutral-950 snap-start ">
         {/* Desktop Version */}
         <div className="hidden md:block">
            <Section1 />
         </div>
         {/* Mobile Version */}
         <div className="block md:hidden">
            <Section1Mobile />
         </div>
        </section>

  
        {/* Sección 2 */}
        <section className="relative items-center justify-center min-h-screen text-white bg-gradient-to-b from-green to-green">
          <Section2 />
        </section>

  
        {/* Sección 3 */}
        <section className="relative items-center justify-center min-h-screen text-black bg-gradient-to-b from-neutral-950 to-neutral-900">
          <Section3 />
        </section>
        {/* Footer */}
        <Footer />
      </main>
    );
  }
  