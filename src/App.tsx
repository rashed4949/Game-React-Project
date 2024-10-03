import { Grid, GridItem, HStack, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
        templateColumns={{ base: "1fr", lg: `'200px' '1fr'` }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeading />
          </Box>
          <HStack spacing={5} paddingLeft={10} marginBottom={3}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
