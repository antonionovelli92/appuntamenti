import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const rimuoviElemento = (id) => {
    setPeople((oldValue) => oldValue.filter((value) => value.id !== id));
  };

  const ricaricaElementi = () => {
    setPeople(data);
  };

  return (
    <section>
      <div className="container">
        <h2 style={{ color: "var(--bg-blue)" }}>Prossimi Incontri</h2>
        <div className="people-list">
          <List data={people} rimuoviElemento={rimuoviElemento} />
        </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={ricaricaElementi}>
            {" "}
            Ricarica{" "}
          </button>

          <button className="btn btn-delete" onClick={() => setPeople([])}>
            {" "}
            Elimina tutto
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
