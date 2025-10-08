import { Stack, Title } from "@mantine/core";
import type { Pet } from "../types/Pet";
import PetGrid from "../components/PetGrid";

interface BySizeTabProps {
  pets: Pet[];
}

const BySizeTab: React.FC<BySizeTabProps> = ({pets}) => {
  const sections = [{label: "Small", fn: (pet: Pet) => pet.weight < 10}, {label: "Medium", fn: (pet: Pet) => pet.weight >= 10 && pet.weight <= 40}, {label: "Large", fn: (pet: Pet) => pet.weight > 40}];

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

export default BySizeTab