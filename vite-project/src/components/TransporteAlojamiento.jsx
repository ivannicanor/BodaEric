import "./TransporteAlojamiento.css";
import busImage from '../assets/bus.png';

function TransporteAlojamiento() {



    return (
        <>
            <div className="section-divider"></div>
            <section className="transport-accommodation-section">
                <div className="container">
                    <h2 className="section-title">Transporte y Alojamiento</h2>
                    <div className="section-divider-small"></div>
                    
                    <div className="transport-accommodation">
                        <div className="transport">
                <h2>Transporte</h2>
                <p style={{marginBottom: "10px"}}>Habrá disponible un autobús que partirá de Chinchón, cerca de la plaza principal, sobre las 18:00h del sábado, y os llevará hasta la finca.</p>
                <p style={{marginBottom: "10px"}}>Para la vuelta tendréis otro autobús disponible, que partirá a las 05:00h del domingo, de la finca de nuevo hacia Chichón pueblo. </p>
                <p style={{marginBottom: "10px"}}>Recomendamos que dejéis el coche en Chinchón pueblo para el gran día (sábado tarde-noche). </p>
                <p style={{marginBottom: "10px"}}>Al día siguiente para la postboda no facilitamos transporte. Cada uno tendrá que llevar su coche a la finca.</p>
            </div>

            {/* fin transporte */}

            {/* //inicio lineaseparatoria */}

            {/* fin lineaseparatoria */}

            {/* //inicio alojamiento */}
            <div className="accommodation">
                <h2>Alojamiento</h2>
                <p>Os recomendamos alojaros en Chinchón pueblo, y así poder usar el bus (que facilitamos los novios) de ida a la finca el sábado y de vuelta tras la fiesta, para que podáis consumir las sustancias que deseéis 🥳</p>
            </div>

            {/* fin alojamiento */}
                    </div>
                </div>
            </section>
        </>
    );

}

export default TransporteAlojamiento;