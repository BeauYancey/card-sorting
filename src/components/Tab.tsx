import { Stack, Title } from "@mantine/core";
import type { Pet } from "../types/Pet";
import PetGrid from "../components/PetGrid";

interface TabContentProps {
  pets: Pet[];
  sections: {label: string, fn: (pet: Pet) => boolean}[];
}

const TabContent: React.FC<TabContentProps> = ({pets, sections}) => {
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

export default TabContent