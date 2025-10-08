import { Stack, Title } from "@mantine/core";
import type { Pet } from "../types/Pet";
import PetGrid from "../components/PetGrid";

interface ByAgeTabProps {
  pets: Pet[];
}

const ByAgeTab: React.FC<ByAgeTabProps> = ({pets}) => {
  const sections = [{label: "Baby", fn: (pet: Pet) => pet.age < 3}, {label: "Young", fn: (pet: Pet) => pet.age >= 3 && pet.age <= 10}, {label: "Senior", fn: (pet: Pet) => pet.age > 10}];

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

export default ByAgeTab