import { Tabs, Title } from "@mantine/core"
import pets from "./data/pets.json"
import type { Pet } from "./types/Pet";
import TabContent from "./components/Tab";

function App() {

  const speciesSections = [
    {label: "Dogs", fn: (pet: Pet) => pet.species === "Dog"}, 
    {label: "Cats", fn: (pet: Pet) => pet.species === "Cat"}, 
    {label: "Birds", fn: (pet: Pet) => pet.species === "Bird"}
  ];
  const sizeSections = [
    {label: "Small", fn: (pet: Pet) => pet.weight < 10}, 
    {label: "Medium", fn: (pet: Pet) => pet.weight >= 10 && pet.weight <= 40}, 
    {label: "Large", fn: (pet: Pet) => pet.weight > 40}
  ];
  const ageSections = [
    {label: "Baby", fn: (pet: Pet) => pet.age < 3}, 
    {label: "Young", fn: (pet: Pet) => pet.age >= 3 && pet.age <= 10}, 
    {label: "Senior", fn: (pet: Pet) => pet.age > 10}
  ];

  return (
    <main>
      <Title order={1} mb="sm">Adopt a Pet</Title>
      <Tabs mb="md">
        <Tabs.List mb="md">
          <Tabs.Tab value="species"><Title order={4}>By Species</Title></Tabs.Tab>
          <Tabs.Tab value="size"><Title order={4}>By Size</Title></Tabs.Tab>
          <Tabs.Tab value="age"><Title order={4}>By Age</Title></Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="species" pt="xs">
          <TabContent pets={pets as Pet[]} sections={speciesSections} />
        </Tabs.Panel>

        <Tabs.Panel value="size" pt="xs">
          <TabContent pets={pets as Pet[]} sections={sizeSections} />
        </Tabs.Panel>

        <Tabs.Panel value="age" pt="xs">
          <TabContent pets={pets as Pet[]} sections={ageSections} />
        </Tabs.Panel>
      </Tabs>
    </main>
  )
}

export default App
