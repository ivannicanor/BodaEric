import "./TransporteAlojamiento.css";
import busImage from '../assets/bus.png';

function TransporteAlojamiento() {



    return (
        <section className="transport-accommodation">
            {/* //inicio transporte */}
            <div className="transport">
                <h1>Transporte</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus ut sint neque ratione quaerat exercitationem ad corrupti ipsa?
                    Vitae voluptas dolor unde quia, tempora id error nihil illo impedit molestias?</p>
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
                <h1>alojamiento</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus ut sint neque ratione quaerat exercitationem ad corrupti ipsa?
                    Vitae voluptas dolor unde quia, tempora id error nihil illo impedit molestias?</p>
                <a href=""> picha aqui para ver el hotel</a>
            </div>

            {/* fin alojamiento */}

        </section>

    );

}

export default TransporteAlojamiento;