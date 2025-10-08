import { Stack, Title } from "@mantine/core";
import type { Pet } from "../types/Pet";
import PetGrid from "../components/PetGrid";

interface BySpeciesTabProps {
  pets: Pet[];
}

const BySpeciesTab: React.FC<BySpeciesTabProps> = ({pets}) => {
  const sections = [{label: "Dogs", fn: (pet: Pet) => pet.species === "Dog"}, {label: "Cats", fn: (pet: Pet) => pet.species === "Cat"}, {label: "Birds", fn: (pet: Pet) => pet.species === "Bird"}];

  return (
    <Stack gap="xl">
      {sections.map(sec => (
        <Stack key={sec.label} gap="xs">
          <Title order={2}>{sec.label}</Title>
          <PetGrid pets={pets.filter(sec.fn)} />
        </Stack>
      ))}
    </Stack>
  );
}

export default BySpeciesTab