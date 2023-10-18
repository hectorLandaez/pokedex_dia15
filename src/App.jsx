import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import usePokemon from "./services/usePokemon";

function App() {
  const { all, data, pokemon, changePokemon, handleClick, handleClickLi } =
    usePokemon();

  const [active, setActive] = useState(false);

  const clickLi = (poke) => {
    setActive(!active);
    handleClickLi(poke);
  };

  return (
    <main>
      <h1>POKEDEX</h1>
      <div id="firstDiv">
        <form onSubmit={changePokemon}>
          <input type="text" placeholder="FILTRA POR NOMBRE "/>
          <button type="submit">Buscar</button>
        </form>
        <div>
          <span>CATALOGO</span>
          <div id="firstDiv-second">
            <input
              type="text"
              onFocus={() => setActive(!active)}
              defaultValue={pokemon}
            />
            {active && (
              <ul>
                {all?.results.map((el, i) => (
                  <li key={i} onClick={() => clickLi(el.name)}>
                    {el.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div id="secondDiv">
        <Card data={data} />
      </div>
    </main>
  );
}

export default App;
