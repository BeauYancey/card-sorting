import { Grid, Group, Select, Tabs, Title } from "@mantine/core"
import pets from "./data/pets.json";
import PetCard from "./components/PetCard"
import { useEffect, useState } from "react";
import { sortByAdoptionFee, sortByAge, sortBySize } from "./utilities/sort";
import { ArrowDownIcon, ArrowUpIcon, SortAscendingIcon } from "@phosphor-icons/react";
import type { Pet } from "./types/Pet";
import Filter from "./components/Filter";

function App() {
  const [speciesFilter, setSpeciesFilter] = useState<string | null>(null);
  const [breedFilter, setBreedFilter] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [descending, setDescending] = useState<boolean>(false);
  const [sortedPets, setSortedPets] = useState<Pet[]>(pets as Pet[]);

  useEffect(() => {
    let results = [...pets] as Pet[]
    switch (speciesFilter) {
      case "Dogs":
        results = results.filter(pet => pet.species === "Dog");
        break;
      case "Cats":
        results = results.filter(pet => pet.species === "Cat");
        break;
      case "Birds":
        results = results.filter(pet => pet.species === "Bird");
        break;
    }

    results = results.filter(
      pet => 
        breedFilter.length === 0 
        || breedFilter.some(breed => pet.breed.toLowerCase().includes(breed.toLowerCase()))
    );
    
    switch (sortBy) {
      case "Age":
        setSortedPets(results.sort((a, b) => sortByAge(a, b, descending)));
        break;
      case "Size":
        setSortedPets(results.sort((a, b) => sortBySize(a, b, descending)));
        break;
      case "Adoption Fee":
        setSortedPets(results.sort((a, b) => sortByAdoptionFee(a, b, descending)));
        break;
      default:
        setSortedPets(results);
    }
  }, [speciesFilter, breedFilter, sortBy, descending]);
  
  return (
    <main>
      <Title order={1} mb="sm">Adopt a Pet</Title>
      <Tabs mb="md">
        <Tabs.List mb="md">
          <Tabs.Tab value="All" onClick={() => {setSpeciesFilter(null); setBreedFilter([]); setDescending(false)}}><Title order={4}>All</Title></Tabs.Tab>
          <Tabs.Tab value="Dogs" onClick={() => {setSpeciesFilter("Dogs"); setBreedFilter([]); setDescending(false)}}><Title order={4}>Dogs</Title></Tabs.Tab>
          <Tabs.Tab value="Cats" onClick={() => {setSpeciesFilter("Cats"); setBreedFilter([]); setDescending(false)}}><Title order={4}>Cats</Title></Tabs.Tab>
          <Tabs.Tab value="Birds" onClick={() => {setSpeciesFilter("Birds"); setBreedFilter([]); setDescending(false)}}><Title order={4}>Birds</Title></Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Dogs" pt="xs">
          <Filter 
            options={["Poodle", "Retriever", "Shepherd"]} 
            filter={breedFilter} 
            setFilter={setBreedFilter}
          />
        </Tabs.Panel>

        <Tabs.Panel value="Cats" pt="xs">
          <Filter 
            options={["Tabby", "Siamese", "Persian"]} 
            filter={breedFilter} 
            setFilter={setBreedFilter}
          />
        </Tabs.Panel>

        <Tabs.Panel value="Birds" pt="xs">
          <Filter 
            options={["Parrot", "Duck", "Finch"]} 
            filter={breedFilter} 
            setFilter={setBreedFilter}
          />
        </Tabs.Panel>
      </Tabs>

      <Select 
        label={<Group gap="xs"><SortAscendingIcon weight="bold" size={16}/>Sort by</Group>}
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
