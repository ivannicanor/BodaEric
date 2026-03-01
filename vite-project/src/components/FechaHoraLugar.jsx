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
        <>
            <div className="section-divider"></div>
            <section className="place-date-outfit">
                <div className="container">
                    <h2 className="section-title">Fecha, Hora y Lugar</h2>
                    <div className="section-divider-small"></div>
                    
                    {/* //inicio Lugar */}
            <div className="place">
                <h1>Ubicación</h1>
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
                    <div className="date-info">
                        <h1>Cuenta atras</h1>
                    </div>
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
                <h1>Codigo de vestimenta</h1>
                <div className="outfit-prohibited-conteiner">
                    <div className="outfit-prohibited">

                        <h2>Prohibiciones</h2>
                        <p>Prohibidos los colores blanco y beige (mujeres y hombres).</p>

                    </div>
                </div>
                <div className="outfit-recommended-conteiner">
                    <div className="outfit-recommended">
                        <h2>Recomendaciones</h2>
                        <p>Sentíos libres de llevar el estilo y prendas que deseeis.
                            Id cómodos. Hay tierra y cesped en la finca, y tenéis que darlo todo en la fiesta.</p>
                    </div>
                    </div>
                </div>
            {/* fin vestimenta */}
            </div>
        </section>
        </>


    );
}

export default FechaHoraLugar;