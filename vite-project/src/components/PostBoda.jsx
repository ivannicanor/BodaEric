import "./PostBoda.css";

function PostBoda() {
    return (
        <>
            <div className="section-divider"></div>
            <section className="Postwedding">
                <div className="container">
                    <h2 className="section-title">PostBoda</h2>
                    <div className="section-divider-small"></div>

                    {/* inicio asistencia */}
            <div className="attendance">
                <p>
                    El domingo 16 de agosto, seréis bienvenidos de nuevo en la finca sobre las 12:00 h de la mañana, para realizar una comida conjunta, vernos las caras de resaca y compartir momentos del día anterior.
                    Habrá una charquita para bañarnos, así que coged bañadores; si no sois nudistas.
                </p>
            </div>
            {/* fin asistencia */}

            {/* inicio encuesta */}
            <div className="attendance survey">
                <h2>Confirma tu asistencia</h2>

                <form className="survey-form">
                    <div className="survey-field">
                        <label htmlFor="name">Nombre y apellidos</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Escribe tu nombre"
                        />
                    </div>

                    <div className="survey-field">
                        <label htmlFor="guests">¿Cuántas personas vendréis?</label>
                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            min="1"
                            placeholder="Ej: 2"
                        />
                    </div>

                    <fieldset className="survey-options">
                        <legend>¿Vendrás a la postboda?</legend>

                        <label>
                            <input type="radio" name="attendance-confirmation" value="si" />
                            Sí, allí estaré
                        </label>

                        <label>
                            <input type="radio" name="attendance-confirmation" value="no" />
                            No podré asistir
                        </label>

                        <label>
                            <input type="radio" name="attendance-confirmation" value="quizas" />
                            Aún no lo sé
                        </label>
                    </fieldset>

                    <div className="survey-field">
                        <label htmlFor="message">¿Quieres dejarnos algún comentario?</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Ej: iré más tarde, tengo restricciones alimentarias, etc."
                        ></textarea>
                    </div>

                    <button type="submit" className="survey-button">
                        Enviar respuesta
                    </button>
                </form>
            </div>
            {/* fin encuesta */}

            {/* inicio finboda */}
            <div className="transportPostBoda">
                <p>
                    La boda finalmente acabará el domingo 16 de agosto a las 18:00h, cuando tendremos que volver todos a casa :(
                </p>
                    </div>
                    {/* fin encuesta */}
                </div>
            </section>
        </>
    );
}

export default PostBoda;