import { Grid } from "@mantine/core";
import type { Pet } from "../types/Pet";
import PetCard from "./PetCard";

interface PetGridProps {
  pets: Pet[];
}

const PetGrid: React.FC<PetGridProps> = ({pets}) => {
  return (
    <Grid gutter="md">
      {pets.map(pet => 
        <Grid.Col span={{base: 12, sm: 6, md: 4, lg: 3}} key={pet.name}>
          <PetCard pet={pet} />
        </Grid.Col>
      )}
    </Grid>
  )
}

export default PetGrid;