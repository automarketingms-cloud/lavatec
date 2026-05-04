export default function CTA() {
  return (
    <section className="py-28 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-(--blue)">
          ¿Tu lavadora tiene malos olores o no rinde como antes?
        </h2>

        <p className="text-lg mb-12 text-gray-300">
          Realiza una limpieza profunda y mantención preventiva a domicilio.
          Elimina hongos, sarro y suciedad desde la raíz, alarga la vida útil y
          evita reparaciones costosas.
        </p>

        <a
          href="https://wa.me/+56992226802"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-(--blue) text-white px-14 py-5 rounded-xl text-lg font-semibold shadow-2xl hover:scale-105 transition"
        >
          Solicitar servicio por WhatsApp
        </a>
      </div>
    </section>
  );
}
