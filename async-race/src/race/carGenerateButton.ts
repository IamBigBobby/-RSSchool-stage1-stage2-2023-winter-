function getRandomElement(array: string[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateRandomColor() {
  const hexCharacters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i += 1) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function generateCar(): { name: string; color: string } {
  const carBrands = [
    "Toyota",
    "Honda",
    "BMW",
    "Mercedes-Benz",
    "Ford",
    "Audi",
    "Chevrolet",
    "Nissan",
    "Volkswagen",
    "Tesla",
  ];

  const carModels = [
    "Camry",
    "Civic",
    "3 Series",
    "C-Class",
    "F-150",
    "A4",
    "Silverado",
    "Altima",
    "Golf",
    "Model S",
  ];

  const randomCarBrand = getRandomElement(carBrands);
  const randomCarModel = getRandomElement(carModels);
  const randomColor = generateRandomColor();

  const newCar = {
    name: `${randomCarBrand} ${randomCarModel}`,
    color: randomColor,
  };

  return newCar;
}

export default function addNewCars(): void {
  const newCar = generateCar();
  console.log(newCar);
}
