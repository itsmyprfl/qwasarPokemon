import pokedex from "../../assets/pokedex.png";
import "./index.css";

function Header() {
  return (
    <header>
       <img src={pokedex} alt="pokedex" className="pokedex"></img>
      <div>
        <button className="about"><a className="link" href="https://pokeapi.co/about">About</a></button>
      </div>
    </header>
  );
}

export default Header;
