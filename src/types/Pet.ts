export interface Pet {
  name: string;
  age: number; // in years
  weight: number; // in pounds
  adoptionFee: number; // in dollars
  species: "Dog" | "Cat" | "Bird" | "Other";
  breed: string;
  photo: string;
}