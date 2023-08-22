import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
    const {games, error} = useGames();
  return (
    <div>
       {error && <Text>{error}</Text>}
       <ul>
       {games.map(games => <li key={games.id}>{games.name}</li>)}
       </ul>
       
    </div>
  )
}

export default GameGrid;