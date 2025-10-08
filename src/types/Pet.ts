export interface Pet {
  name: string;
  age: number; // in years
  weight: number; // in pounds
  adoptionFee: number; // in dollars
  species: "Dog" | "Cat" | "Bird";
  breed: string;
  photo: string;
}