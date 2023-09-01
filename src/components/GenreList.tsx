import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      ></Spinner>
    );
  return (
    <>
      <Heading fontSize="2xl" marginY={2}>
        Genre
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="6px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
                borderRadius={4}
              ></Image>
              <Button
                onClick={() => onSelectedGenre(genre)}
                fontSize="lg"
                variant="link"
                fontWeight={genre?.id === selectedGenre?.id ? "bold" : "nomarl"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
