import type { Pet } from "../types/Pet";
import { Card, Stack, Title, Text } from "@mantine/core";

interface CardProps {
  pet: Pet;
}

const PetCard: React.FC<CardProps> = ({pet}) =>{
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder flex="1 0 16rem">
      <Card.Section>
        <img 
          src={pet.photo} 
          alt={`${pet.name} the ${pet.breed}`} 
          style={{ objectFit: "cover", height: "12rem", width: "100%" }}
        />
      </Card.Section>

      <Title order={2} my="xs">{pet.name}</Title>
      <Stack gap="0.25rem">
        <Text>Age: {pet.age} years</Text>
        <Text>Weight: {pet.weight} lbs</Text>
        <Text>Adoption Fee: ${pet.adoptionFee}</Text>
        <Text>Species: {pet.species}</Text>
        <Text>Breed: {pet.breed}</Text>
      </Stack>
    </Card>
  );
}

export default PetCard;