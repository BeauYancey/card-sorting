import { Grid, Select, Title } from "@mantine/core"
import pets from "./data/pets.json";
import PetCard from "./components/PetCard"
import { useEffect, useState } from "react";
import { sortByAdoptionFee, sortByAge, sortBySize } from "./utilities/sort";
import { ArrowDownIcon, ArrowUpIcon } from "@phosphor-icons/react";
import type { Pet } from "./types/Pet";

function App() {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [descending, setDescending] = useState<boolean>(false);
  const [sortedPets, setSortedPets] = useState<Pet[]>(pets as Pet[]);

  useEffect(() => {
    console.log(sortBy);
  }, [sortBy]);

  useEffect(() => {
    switch (sortBy) {
      case "Age":
        console.log("Sorting by age");
        setSortedPets(prev => [...prev].sort((a, b) => sortByAge(a, b, descending)));
        break;
      case "Size":
        setSortedPets(prev => [...prev].sort((a, b) => sortBySize(a, b, descending)));
        break;
      case "Adoption Fee":
        setSortedPets(prev => [...prev].sort((a, b) => sortByAdoptionFee(a, b, descending)));
        break;
      default:
        setSortedPets(pets as Pet[]);
    }
  }, [sortBy, descending]);
  
  return (
    <main>
      <Title order={1} mb="sm">Adopt a Pet</Title>
      <Select 
        label="Sort by"
        data={["Age", "Size", "Adoption Fee"]}
        value={sortBy}
        onChange={setSortBy}
        maw="20rem"
        clearable
        leftSection={sortBy
          ? descending
            ? <ArrowDownIcon weight="bold" onClick={() => setDescending(false)} style={{cursor: "pointer"}} />
            : <ArrowUpIcon weight="bold" onClick={() => setDescending(true)} style={{cursor: "pointer"}} />
          : undefined}
      />
      <Grid mt="lg" gutter="md">
        {sortedPets.map(pet => 
          <Grid.Col span={{base: 12, sm: 6, md: 4, lg: 3}} key={pet.name}>
            <PetCard pet={pet} />
          </Grid.Col>
        )}
      </Grid>
    </main>
  )
}

export default App
