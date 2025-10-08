import { Tabs, Title } from "@mantine/core"
import pets from "./data/pets.json"
import type { Pet } from "./types/Pet";
import BySpeciesTab from "./tabs/BySpeciesTab";
import BySizeTab from "./tabs/BySizeTab";
import ByAgeTab from "./tabs/ByAgeTab";

function App() {
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
          <BySpeciesTab pets={pets as Pet[]} />
        </Tabs.Panel>

        <Tabs.Panel value="size" pt="xs">
          <BySizeTab pets={pets as Pet[]} />
        </Tabs.Panel>

        <Tabs.Panel value="age" pt="xs">
          <ByAgeTab pets={pets as Pet[]} />
        </Tabs.Panel>
      </Tabs>
    </main>
  )
}

export default App
