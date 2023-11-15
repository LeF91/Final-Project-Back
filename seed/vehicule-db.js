const mockData = [
  {
    image:
      "https://images.caradisiac.com/images/2/8/4/2/182842/S0-guide-d-achat-les-dix-incontournables-du-deconfinement-628839.jpg",
    brand: "Volkswagen",
    model: {
      name: "Golf",
      creationYear: new Date("2022-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "TSI",
      energy: "Essence",
      power: "150 hp",
    },
    category: "citadine",
    price: 28000,
  },
  {
    image:
      "https://cdn.drivek.com/configurator-imgs/cars/fr/800/SUBARU/OUTBACK/40558_BREAK-5-PORTES/subaru-outback-2021-front-side-1.jpg",
    brand: "Subaru",
    model: {
      name: "Outback",
      creationYear: new Date("2021-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "Boxer",
      energy: "Essence",
      power: "200 hp",
    },
    category: "break",
    price: 35000,
  },
  {
    image: "url_image_3",
    brand: "Chevrolet",
    model: {
      name: "Camaro",
      creationYear: new Date("2020-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "V8",
      energy: "Essence",
      power: "450 hp",
    },
    category: "coupe",
    price: 55000,
  },
  {
    image: "url_image_4",
    brand: "Hyundai",
    model: {
      name: "Santa Fe",
      creationYear: new Date("2019-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "CRDi",
      energy: "Diesel",
      power: "220 hp",
    },
    category: "SUV",
    price: 42000,
  },
  {
    image: "url_image_5",
    brand: "Lexus",
    model: {
      name: "RX",
      creationYear: new Date("2020-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "Hybrid",
      energy: "Hybride",
      power: "300 hp",
    },
    category: "SUV",
    price: 60000,
  },
  {
    image: "url_image_6",
    brand: "Ford",
    model: {
      name: "Mustang",
      creationYear: new Date("2022-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "Ecoboost",
      energy: "Essence",
      power: "310 hp",
    },
    category: "coupe",
    price: 48000,
  },
  {
    image: "url_image_7",
    brand: "Nissan",
    model: {
      name: "Altima",
      creationYear: new Date("2021-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "VC-Turbo",
      energy: "Essence",
      power: "248 hp",
    },
    category: "berline",
    price: 32000,
  },
  {
    image: "url_image_8",
    brand: "Mazda",
    model: {
      name: "CX-5",
      creationYear: new Date("2020-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "Skyactiv-G",
      energy: "Essence",
      power: "187 hp",
    },
    category: "SUV",
    price: 38000,
  },
  {
    image: "url_image_9",
    brand: "Kia",
    model: {
      name: "Seltos",
      creationYear: new Date("2022-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "Smartstream",
      energy: "Essence",
      power: "146 hp",
    },
    category: "SUV",
    price: 27000,
  },
  {
    image: "url_image_10",
    brand: "Jaguar",
    model: {
      name: "F-PACE",
      creationYear: new Date("2019-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "P300",
      energy: "Essence",
      power: "296 hp",
    },
    category: "SUV",
    price: 65000,
  },

  {
    image: "url_image_1",
    brand: "Audi",
    model: {
      name: "A4",
      creationYear: new Date("2022-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "TFSI",
      energy: "Essence",
      power: "220 hp",
    },
    category: "berline",
    price: 42000,
  },
  {
    image: "url_image_2",
    brand: "BMW",
    model: {
      name: "X5",
      creationYear: new Date("2020-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "xDrive",
      energy: "Diesel",
      power: "280 hp",
    },
    category: "SUV",
    price: 55000,
  },
  {
    image: "url_image_3",
    brand: "Mercedes-Benz",
    model: {
      name: "C-Class",
      creationYear: new Date("2021-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "AMG",
      energy: "Essence",
      power: "350 hp",
    },
    category: "coupe",
    price: 60000,
  },

  {
    image: "url_image_1",
    brand: "Honda",
    model: {
      name: "Civic",
      creationYear: new Date("2021-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "Turbo",
      energy: "Essence",
      power: "180 hp",
    },
    category: "citadine",
    price: 25000,
  },
  {
    image: "url_image_2",
    brand: "Jeep",
    model: {
      name: "Wrangler",
      creationYear: new Date("2019-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "V8",
      energy: "Essence",
      power: "300 hp",
    },
    category: "4x4",
    price: 45000,
  },
  {
    image: "url_image_3",
    brand: "Tesla",
    model: {
      name: "Model 3",
      creationYear: new Date("2020-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "Electric",
      energy: "Electric",
      power: "450 hp",
    },
    category: "berline",
    price: 55000,
  },

  {
    image: "url_image_11",
    brand: "Porsche",
    model: {
      name: "911",
      creationYear: new Date("2022-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "Turbo S",
      energy: "Essence",
      power: "640 hp",
    },
    category: "sport",
    price: 180000,
  },
  {
    image: "url_image_12",
    brand: "Volvo",
    model: {
      name: "XC90",
      creationYear: new Date("2020-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "T8",
      energy: "Hybride",
      power: "400 hp",
    },
    category: "SUV",
    price: 65000,
  },
  {
    image: "url_image_13",
    brand: "Acura",
    model: {
      name: "MDX",
      creationYear: new Date("2021-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "Sport Hybrid",
      energy: "Hybride",
      power: "321 hp",
    },
    category: "SUV",
    price: 55000,
  },
  {
    image: "url_image_14",
    brand: "Infiniti",
    model: {
      name: "Q50",
      creationYear: new Date("2019-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "Red Sport",
      energy: "Essence",
      power: "400 hp",
    },
    category: "berline",
    price: 48000,
  },
  {
    image: "url_image_15",
    brand: "Land Rover",
    model: {
      name: "Discovery",
      creationYear: new Date("2022-01-01"),
      productionStop: null,
    },
    motorisation: {
      name: "D300",
      energy: "Diesel",
      power: "300 hp",
    },
    category: "SUV",
    price: 70000,
  },
];

console.log(mockData);

module.exports = mockData;