import "./FechaHoraLugar.css";

function FechaHoraLugar() {
  // Pon aquí la dirección real (mejor si es completa)
  const address = "mostoles";

  // Google Maps embed por búsqueda
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`;

  return (
    <section className="place">
      <div className="map-conteiner">
        <div className="map">
          <iframe
            title="Mapa Google"
            src={src}
            className="googleMap"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="map-information-conteiner">
        {/* Aquí tu info: fecha, hora, dirección, indicaciones, etc. */}
      </div>
    </section>
  );
}

export default FechaHoraLugar;