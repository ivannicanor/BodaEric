import "./Alergenos.css";
import { useEffect, useMemo, useState } from "react";
import Creatable from "react-select/creatable";

function Alergenos() {
  const [alergenosList, setAlergenosList] = useState([]); // ["gluten", "lactosa", ...]
  const [formData, setFormData] = useState({
    nombre: "",
    alergeno: "" // guardaremos el string final aquí
  });

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAlergenos = async () => {
      try {
        setError("");
        const response = await fetch("http://localhost:3001/api/alergenos/lista");
        const data = await response.json();

        if (!response.ok) throw new Error(data?.message || "Error al obtener alérgenos");

        setAlergenosList(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("❌ No se pudieron cargar los alérgenos");
        setAlergenosList([]);
      }
    };

    fetchAlergenos();
  }, []);

  // react-select usa opciones { value, label }
  const options = useMemo(
    () => alergenosList.map((a) => ({ value: a, label: a })),
    [alergenosList]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    if (!formData.nombre || !formData.alergeno) {
      setError("❌ Rellena nombre y elige/crea un alérgeno");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/alergenos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          alergeno: formData.alergeno
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.message || "Error al guardar");

      setMensaje("✅ Alérgeno enviado correctamente");
      setFormData({ nombre: "", alergeno: "" });
    } catch (err) {
      console.error(err);
      setError("❌ No se pudo enviar el alérgeno");
    }
  };

  return (
    <>
      <div className="section-divider"></div>

      <section className="AlergenosSection">
        <div className="container">
          <h2 className="section-title">Alérgenos</h2>
          <div className="section-divider-small"></div>

          <div className="attendance survey">
            <h2>Indica tu alérgeno</h2>

            <form className="survey-form" onSubmit={handleSubmit}>
              {/* Nombre */}
              <div className="survey-field">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Escribe tu nombre"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, nombre: e.target.value }))
                  }
                  required
                />
              </div>

              {/* React Select Creatable */}
              <div className="survey-field">
                <label>Alérgeno</label>

                <Creatable
                  classNamePrefix="rs"                 // para poder estilizar por CSS
                  placeholder="Selecciona o escribe un alérgeno..."
                  isClearable
                  options={options}
                  value={
                    formData.alergeno
                      ? { value: formData.alergeno, label: formData.alergeno }
                      : null
                  }
                  onChange={(selected) => {
                    setFormData((p) => ({
                      ...p,
                      alergeno: selected ? selected.value : ""
                    }));
                  }}
                  onCreateOption={(inputValue) => {
                    // usuario escribe uno nuevo (ej: "soja")
                    const nuevo = inputValue.trim();
                    if (!nuevo) return;

                    // actualizamos el formData con el nuevo valor
                    setFormData((p) => ({ ...p, alergeno: nuevo }));

                    // opcional: añadirlo al listado local para que aparezca ya
                    setAlergenosList((prev) =>
                      prev.includes(nuevo) ? prev : [...prev, nuevo]
                    );
                  }}
                />

                {error && <p className="error-message">{error}</p>}
                {mensaje && <p className="success-message">{mensaje}</p>}
              </div>

              <button type="submit" className="survey-button">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Alergenos;