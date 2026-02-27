import "./TransporteAlojamiento.css";
import busImage from '../assets/bus.png';

function TransporteAlojamiento() {



    return (
        <section className="transport-accommodation">
            <h1>Alojamiento y hotel</h1>
            {/* //inicio transporte */}
            <div className="transport">
                <h2>Transporte</h2>
                <p>Habrá disponible un autobús que partirá de Chinchón, cerca de la plaza principal, sobre las 18:00h del sábado, y os llevará hasta la finca.</p>
                <p>Para la vuelta tendréis otro autobús disponible, que partirá a las 05:00h del domingo, de la finca de nuevo hacia Chichón pueblo. </p>
                <p>Recomendamos que dejéis el coche el Chinchón pueblo para el gran día (sábado tarde-noche). </p>
                <p>Al día siguiente para la postboda no facilitamos transporte. Cada uno tendrá que llevar su coche a la finca.</p>
            </div>

            {/* fin transporte */}

            {/* //inicio lineaseparatoria */}
            <div className="line">
                <span className="line-icon">
                    <img src={busImage} alt="Bus" />
                </span>
                <span className="line-bar"></span>
            </div>

            {/* fin lineaseparatoria */}

            {/* //inicio alojamiento */}
            <div className="accommodation">
                <h2>alojamiento</h2>
                <p>Os recomendamos alojaros en Chinchón, para poder usar el bus para ir el día principal y poder consumir las sustancias que deseeis.</p>
                <a href=""> picha aqui para ver el hotel</a>
            </div>

            {/* fin alojamiento */}

        </section>

    );

}

export default TransporteAlojamiento;