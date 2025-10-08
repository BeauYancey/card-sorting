import { Grid, Select, Title } from "@mantine/core"
import pets from "./data/pets.json"
import PetCard from "./components/PetCard"

function App() {
  return (
    <main>
      <Title order={1} mb="sm">Adopt a Pet</Title>
      <Select 
        label="Sort by"
        data={["Age", "Size", "Adoption Fee"]}
        maw="20rem"
        clearable
      />
      <Grid mt="lg" gutter="md">
        {pets.map(pet => 
          <Grid.Col span={{base: 12, sm: 6, md: 4, lg: 3}} key={pet.name}>
            <PetCard pet={pet} />
          </Grid.Col>
        )}
      </Grid>
    </main>
  )
}

export default App
