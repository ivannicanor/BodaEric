import "./PostBoda.css";
import { useState } from "react";

function PostBoda() {
    const [formData, setFormData] = useState({
        nombre_apellidos: "",
        asistencia: "",
        comentario: ""
    });

    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMensaje("");
        setError("");

        try {
            const response = await fetch("http://localhost:3001/api/confirmaciones", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre_apellidos: formData.nombre_apellidos,
                    numero_personas: Number(formData.numero_personas),
                    asistencia: formData.asistencia,
                    comentario: formData.comentario
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error al enviar la confirmación");
            }

            setMensaje("✅ Respuesta enviada correctamente");
            setFormData({
                nombre_apellidos: "",
                asistencia: "",
                comentario: ""
            });
        } catch (err) {
            setError("❌ Hubo un error al enviar la respuesta");
            console.error(err);
        }
    };

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

                        <form className="survey-form" onSubmit={handleSubmit}>
                            <div className="survey-field">
                                <label htmlFor="nombre_apellidos">Nombre y apellidos</label>
                                <input
                                    type="text"
                                    id="nombre_apellidos"
                                    name="nombre_apellidos"
                                    placeholder="Escribe tu nombre"
                                    value={formData.nombre_apellidos}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <fieldset className="survey-options">
                                <legend>¿Vendrás a la postboda?</legend>

                                <label>
                                    <input
                                        type="radio"
                                        name="asistencia"
                                        value="si"
                                        checked={formData.asistencia === "si"}
                                        onChange={handleChange}
                                        required
                                    />
                                    Sí, allí estaré
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="asistencia"
                                        value="no"
                                        checked={formData.asistencia === "no"}
                                        onChange={handleChange}
                                    />
                                    No podré asistir
                                </label>
                            </fieldset>

                            <div className="survey-field">
                                <label htmlFor="comentario">¿Quieres dejarnos algún comentario?</label>
                                <textarea
                                    id="comentario"
                                    name="comentario"
                                    rows="4"
                                    placeholder="Ej: iré más tarde, tengo restricciones alimentarias, etc."
                                    value={formData.comentario}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="survey-button">
                                Enviar respuesta
                            </button>

                            {mensaje && <p className="success-message">{mensaje}</p>}
                            {error && <p className="error-message">{error}</p>}
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