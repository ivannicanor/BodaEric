import "./FechaHoraLugar.css";
import { useEffect, useState } from "react";

function FechaHoraLugar() {

    //inicio Lugar
    // Pon aquí la dirección real (mejor si es completa)
    const address = "Molino del Manto (Chinchón)";

    // Google Maps embed por búsqueda
    const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`;
    //fin Lugar

    //inicio fecha
    // ✅ FECHA OBJETIVO (cámbiala)
    const targetDate = new Date(2026, 7, 15, 0, 0, 0);

    const getTimeLeft = () => {
        const now = Date.now();
        const diff = targetDate.getTime() - now;

        if (diff <= 0) {
            return { days: 0, hours: 0, mins: 0, secs: 0 };
        }

        const totalSeconds = Math.floor(diff / 1000);

        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const mins = Math.floor((totalSeconds % (60 * 60)) / 60);
        const secs = totalSeconds % 60;

        return { days, hours, mins, secs };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const id = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(id);
    }, []);

    const pad2 = (n) => String(n).padStart(2, "0");

    //fin fecha

    //inicio vestimenta

    //fin vestimenta



    return (

        <section className="place-date-outfit">
            {/* //inicio Lugar */}
            <div className="place">
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
            </div>
            {/* fin lugar */}

            {/* inicio fecha */}
            <div className="date">
                <div className="date-info-conteiner">
                    <div className="date-info">{/* lo que quieras aquí */}</div>
                </div>

                <div className="date-counter-conteiner">
                    <div className="date-counter">
                        <div className="date-counter-days counter-box">
                            <div className="counter-value">{timeLeft.days}</div>
                            <div className="counter-label">DÍAS</div>
                        </div>

                        <div className="date-counter-hours counter-box">
                            <div className="counter-value">{pad2(timeLeft.hours)}</div>
                            <div className="counter-label">HORAS</div>
                        </div>

                        <div className="date-counter-mins counter-box">
                            <div className="counter-value">{pad2(timeLeft.mins)}</div>
                            <div className="counter-label">MIN</div>
                        </div>

                        <div className="date-counter-secs counter-box">
                            <div className="counter-value">{pad2(timeLeft.secs)}</div>
                            <div className="counter-label">SEG</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fin fecha */}

            {/* inicio vestimenta */}
            <div className="outfit">
                
                <div className="outfit-prohibited-conteiner">
                    <div className="outfit-prohibited">{/* lo que quieras aquí */}</div>
                </div>
                <div className="outfit-recommended-conteiner">
                    <div className="outfit-recommended">{/* lo que quieras aquí */}</div>
                </div>

            </div>
            {/* fin vestimenta */}

        </section>



    );
}

export default FechaHoraLugar;