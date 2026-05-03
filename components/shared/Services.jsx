export default function Services() {
  const services = [
    {
      title: "Limpieza profunda de tambor",
      desc: "Eliminación de suciedad, grasa, sarro, hongos y malos olores. Ideal para recuperar el rendimiento y la higiene de tu lavadora.",
      price: "$40.000 – $50.000",
    },
    {
      title: "Mantención preventiva",
      desc: "Revisión completa del funcionamiento para prevenir fallas futuras y alargar la vida útil.",
      price: "Incluido en limpieza",
    },
    {
      title: "Diagnóstico de fallas",
      desc: "Detección de problemas en bomba, mangueras y funcionamiento general.",
      price: "$10.000 (gratis con limpieza)",
    },
    {
      title: "Servicio a domicilio",
      desc: "Atención rápida y confiable directamente en tu hogar.",
      price: "Sin costo adicional",
    },
  ];

  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-(--blue) mb-16">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-neutral-800 p-8 shadow-xl border-t-4 border-(--blue)
              flex flex-col justify-between text-center rounded-xl
              hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{s.title}</h3>

              <p className="text-gray-400 text-sm mb-6">{s.desc}</p>

              <span className="text-2xl font-bold text-(--blue)">
                {s.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
