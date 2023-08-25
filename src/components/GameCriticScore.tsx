import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameCriticScore = ({ score }: Props) => {
  const color = score >= 85 ? "green" : score >= 75 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="1xl">
      {score}
    </Badge>
  );
};

export default GameCriticScore;
