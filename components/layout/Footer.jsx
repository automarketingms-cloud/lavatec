export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-bold text-(--gold) mb-4">LAVATEC</h3>
          <p className="text-gray-400">
            Cuidamos tu lavadora como si fuera nuestra, para que funcione
            limpia, segura y por muchos años más.
          </p>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="font-semibold mb-4">Horarios</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Lunes a Viernes: 08:00 – 19:00</li>
            <li>Sábado: 08:00 – 18:00</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>WhatsApp: +56 9 34584106</li>
            <li>Instagram: @lavatec</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Lavatec. Todos los derechos reservados.
      </div>
    </footer>
  );
}
