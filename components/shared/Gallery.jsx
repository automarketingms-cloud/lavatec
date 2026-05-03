import Image from "next/image";

export default function Gallery() {
  const images = ["/galeria/4.png", "/galeria/2.png", "/galeria/3.png"];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-(--blue)">
          Trabajos realizados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-3/5 overflow-hidden rounded-xl group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
