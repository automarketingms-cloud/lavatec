import Services from "../components/shared/Services";
import Gallery from "../components/shared/Gallery";
import CTA from "../components/shared/CTA";

export default function Home() {
  return (
    <>
      <div className="pt-24">
        <section id="services">
          <Services />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <CTA />
        </section>
      </div>
    </>
  );
}
