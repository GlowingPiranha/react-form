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
    const nuovoTitolo = {
      id: articoli.length + 1,
      title: nuovoTitolo,
      company: "unknown"
    };
    setArticoli([...articoli, nuovoArticolo]);
    setNuovoTitolo("");
  };

  return (
    <>
      <div className='app'>
        <h1>Lista Articoli</h1>
        <ul>
          {articoli.map((articolo) => (
            <li key={articolo.id}>{articolo.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App
