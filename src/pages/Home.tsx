import "../style/home.css";
import games from "../data/games.json";
import Game from "../components/Game";
import Sorts from "../components/Sorts";
import { useState, useEffect } from "react";
function Home() {
    
    const [game, setGames] = useState([]);
    useEffect(() => {
        fetch("https://646aed8e7d3c1cae4ce2e922.mockapi.io/api/Game")
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

    

    return (
        <>
            <Sorts sorts={["Вечериночные игры", "Семейные игры", "Детские игры"]}/>
            <section className="games">
                {game.map((g:any) => (
                    <Game key={g.id} {...g} />
                ))}
            </section>
        </>
    );
  }
  
  export default Home;