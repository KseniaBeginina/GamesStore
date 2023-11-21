import "../style/game.css";

interface Game{
        id: number,
        name: string,
        img: string,
        year: number,
        type: string,
        language: string,
        age: number,
        playersNumberMin: number,
        playersNumberMax: number,
        time: number,
        producer: string,
        price: number,
        series: [],
        description:string
}

function Game({id,name,img,year,type,language,age,playersNumberMin,playersNumberMax,time,producer,price,series,description}: Game){
    return(
        <article>
            <img src={img} alt= ""/>
            <div className="rightInfo">
                <div className="rightAge">{age}+</div>
                <div className="rightNum">{playersNumberMin}-{playersNumberMax}</div>
            </div>
            <div className="text">
                <h2 className = "gameName">{name}</h2>
                <p className = "gameDesc">{description}</p>
            </div>
            <div className="price">{price}р.</div>
        </article>
    )
}

export default Game;