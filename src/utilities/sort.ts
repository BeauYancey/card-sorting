import type { Pet } from "../types/Pet";

export const sortByAge = (a: Pet, b: Pet, descending?: boolean) => {
  if (descending) {
    return b.age - a.age;
  }
  return a.age - b.age;
};

export const sortBySize = (a: Pet, b: Pet, descending?: boolean) => {
  if (descending) {
    return b.weight - a.weight;
  }
  return a.weight - b.weight;
};

export const sortByAdoptionFee = (a: Pet, b: Pet, descending?: boolean) => {
  if (descending) {
    return b.adoptionFee - a.adoptionFee;
  }
  return a.adoptionFee - b.adoptionFee;
};