import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `'nav nav' 'aside main'`, lg: `'nav' 'main'` }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
