import { BirdIcon, CakeIcon, CatIcon, CreditCardIcon, DogIcon, FeatherIcon, PawPrintIcon, QuestionIcon, ScalesIcon } from "@phosphor-icons/react";
import type { Pet } from "../types/Pet";
import { Card, Stack, Title, Image } from "@mantine/core";
import { Data } from "./Data";

interface CardProps {
  pet: Pet;
}

const PetCard: React.FC<CardProps> = ({pet}) => {
  const SpeciesIcon = (() => {switch (pet.species) {
    case "Dog": return DogIcon;
    case "Cat": return CatIcon;
    case "Bird": return BirdIcon;
    default: return QuestionIcon;
  }})();

  const BreedIcon = (() => {switch (pet.species) {
    case "Dog": return PawPrintIcon;
    case "Cat": return PawPrintIcon;
    case "Bird": return FeatherIcon;
    default: return QuestionIcon;
  }})();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder flex="1 0 16rem">
      <Card.Section>
          <Image 
            src={pet.photo} 
            alt={`${pet.name} the ${pet.breed}`} 
            style={{ objectFit: "cover", height: "12rem", width: "100%" }}
          />
      </Card.Section>

      <Title order={2} my="xs">{pet.name}</Title>
      <Stack gap="0.25rem">
        <Data 
          label="Age" 
          value={`${pet.age} year${pet.age !== 1 ? "s" : ""}`} 
          leftSection={<CakeIcon size={16}/>} 
        />
        <Data 
          label="Weight" 
          value={`${pet.weight} lbs`} 
          leftSection={<ScalesIcon size={16}/>} 
        />
        <Data 
          label="Adotion Fee" 
          value={`$${pet.adoptionFee}`} 
          leftSection={<CreditCardIcon size={16}/>} 
        />
        <Data 
          label="Species" 
          value={pet.species} 
          leftSection={<SpeciesIcon size={16}/>} 
        />
        <Data 
          label="Breed" 
          value={pet.breed} 
          leftSection={<BreedIcon size={16}/>} 
        />
      </Stack>
    </Card>
  );
}

export default PetCard;