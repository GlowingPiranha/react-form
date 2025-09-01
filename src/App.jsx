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
      id: articoli[articoli.length - 1].id + 1,
      title: nuovoTitolo,
      company: "unknown"
    };
    setArticoli([...articoli, nuovoArticolo]);
    setNuovoTitolo("");
  };

  return (
    <>
      <div className="container mt-4">
        <div className="card shadow p-4" >
          <h1 className='mb-4 text-center'>Lista Articoli</h1>

          <form onSubmit={handleSubmit} className='d-flex gap-2 mb-4'>
            <input
              type="text"
              value={nuovoTitolo}
              onChange={(e) => setNuovoTitolo(e.target.value)}
              placeholder='Inserisci titolo...' />
            <button type='submit' className='btn btn-primary'>Aggiungi</button>
          </form>


          <ul className='list-group'>
            {articoli.map((articolo) => (
              <li key={articolo.id} className='list-group-item d-flex justify-content-between align-items-center'>
                {articolo.title}
                <button className='btn btn-outline-danger btn-sm' onClick={() => setArticoli(articoli.filter(a => a.id !== articolo.id))}> X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App
