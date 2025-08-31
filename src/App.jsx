import { useState } from 'react'

function App() {

  const [articoli, setArticoli] = useState([
    {
      id: 1,
      title: "pokemon",
      company: "nintendo"
    },
    {
      id: 2,
      title: "god of war",
      company: "sony"
    },
    {
      id: 3,
      title: "halo",
      company: "microsoft"
    },
    {
      id: 4,
      title: "the legend of zelda",
      company: "nintendo"
    },
    {
      id: 5,
      title: "minecraft",
      company: "mojang"
    }
  ]);

  const [nuovoTitolo, setNuovoTitolo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuovoTitolo) return;

    const nuovoArticolo = {
      id: articoli.length + 1,
      title: nuovoTitolo,
      company: "unknown"
    };
    setArticoli([...articoli, nuovoArticolo]);
    setNuovoTitolo("");
  };

  return (
    <>
      <div className="container mt-4">
        <div className='app'>
          <h1>Lista Articoli</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={nuovoTitolo}
              onChange={(e) => setNuovoTitolo(e.target.value)}
              placeholder='Inserisci titolo...' />
            <button type='submit'>Aggiungi</button>
          </form>

          <ul>
            {articoli.map((articolo) => (
              <li key={articolo.id}>
                {articolo.title}
                <button onClick={() => setArticoli(articoli.filter(a => a.id !== articolo.id))}> X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App
