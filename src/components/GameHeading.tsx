import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((g) => g.id === gameQuery.genreId);

  const heading = ` ${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading fontSize="5xl" margin={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
