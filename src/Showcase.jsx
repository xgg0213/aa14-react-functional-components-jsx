import bulbasaur from './images/bulbasaur.jpg';
import './App.css';

function Showcase() {
    const favPokemon = "Bulbasaur";
    const pokeCharacteristics = {type:"Grass" , move:"Vine Whip"}
    return (
      <div className='background'>
        <h1>{favPokemon}&apos;s Showcase Component</h1>
        <img src={bulbasaur} alt={favPokemon} />
        <h2>{favPokemon}&apos;s type is 
            <span style={{ backgroundColor: "#008000", color: "#FFFFFF", padding: "0 5px", marginLeft: "5px" }}>
            {pokeCharacteristics.type}
            </span>
            and one of their moves is
            <span style={{ backgroundColor: "#FFFFFF", color: "#008000", padding: "0 5px", marginLeft: "5px" }}>
            {pokeCharacteristics.move}
            </span>.
        </h2>
      </div>
    );
  }
  
  export default Showcase;