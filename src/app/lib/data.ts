export type CarSpecifications = {
  fuel: string;
  engine: string;
  power: string;
  drivetrain: string;
  acceleration: string;
  seating: string;
};

export type Car = {
  _id: string;
  name: string;
  brand: string;
  year: string;
  price: string;
  rating: string;
  specifications: CarSpecifications;
  image: string;
};

export type Brand = {
  id: string;
  name: string;
  logo: string;
};

export const brands: Brand[] = [
  {
    id: "toyota",
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
  },
  {
    id: "hyundai",
    name: "Hyundai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg",
  },
  {
    id: "tata",
    name: "Tata",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
  },
  {
    id: "mahindra",
    name: "Mahindra",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6HtMM0j3_nHScvSxnFzyk4iVt4ZFZHKUmA&s",
  },
];

export const cars: Car[] = [
  {
    _id: "69bfb713bdc7d9c79e559ba7",
    name: "Urban Cruiser Hyryder",
    brand: "Toyota",
    year: "2025",
    price: "1999999",
    rating: "4.2",
    specifications: {
      fuel: "Petrol & Hybrid & CNG",
      engine: "1462 cc / 1490 cc (Hybrid)",
      power: "103 PS & 137 Nm",
      drivetrain: "FWD & AWD",
      acceleration: "11 sec",
      seating: "5",
    },
    image:
"data:image/jpeg;base64,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"  },
  {
    _id: "toyota-innova-hycross-2025",
    name: "Innova Hycross",
    brand: "Toyota",
    year: "2025",
    price: "1945000",
    rating: "4.6",
    specifications: {
      fuel: "Petrol & Hybrid",
      engine: "1987 cc",
      power: "186 PS",
      drivetrain: "FWD",
      acceleration: "9.5 sec",
      seating: "7",
    },
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "toyota-fortuner-2025",
    name: "Fortuner",
    brand: "Toyota",
    year: "2025",
    price: "3360000",
    rating: "4.7",
    specifications: {
      fuel: "Diesel & Petrol",
      engine: "2755 cc / 2694 cc",
      power: "204 PS & 500 Nm",
      drivetrain: "RWD & 4WD",
      acceleration: "10.8 sec",
      seating: "7",
    },
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "toyota-glanza-2025",
    name: "Glanza",
    brand: "Toyota",
    year: "2025",
    price: "686000",
    rating: "4.1",
    specifications: {
      fuel: "Petrol & CNG",
      engine: "1197 cc",
      power: "90 PS & 113 Nm",
      drivetrain: "FWD",
      acceleration: "11.2 sec",
      seating: "5",
    },
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "hyundai-creta-2025",
    name: "Creta",
    brand: "Hyundai",
    year: "2025",
    price: "1111000",
    rating: "4.5",
    specifications: {
      fuel: "Petrol & Diesel",
      engine: "1497 cc / 1482 cc Turbo",
      power: "115 PS / 160 PS",
      drivetrain: "FWD",
      acceleration: "10.5 sec",
      seating: "5",
    },
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "hyundai-verna-2025",
    name: "Verna",
    brand: "Hyundai",
    year: "2025",
    price: "1107000",
    rating: "4.4",
    specifications: {
      fuel: "Petrol",
      engine: "1497 cc / 1482 cc Turbo",
      power: "115 PS / 160 PS",
      drivetrain: "FWD",
      acceleration: "8.1 sec",
      seating: "5",
    },
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "hyundai-venue-2025",
    name: "Venue",
    brand: "Hyundai",
    year: "2025",
    price: "794000",
    rating: "4.2",
    specifications: {
      fuel: "Petrol & Diesel",
      engine: "1197 cc / 998 cc Turbo / 1493 cc",
      power: "83 PS / 120 PS / 116 PS",
      drivetrain: "FWD",
      acceleration: "11 sec",
      seating: "5",
    },
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "hyundai-ioniq5-2025",
    name: "Ioniq 5",
    brand: "Hyundai",
    year: "2025",
    price: "4650000",
    rating: "4.8",
    specifications: {
      fuel: "Electric",
      engine: "72.6 kWh Battery",
      power: "217 PS & 350 Nm",
      drivetrain: "RWD",
      acceleration: "7.6 sec",
      seating: "5",
    },
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "tata-nexon-2025",
    name: "Nexon",
    brand: "Tata",
    year: "2025",
    price: "800000",
    rating: "4.5",
    specifications: {
      fuel: "Petrol & Diesel & CNG",
      engine: "1199 cc / 1497 cc",
      power: "120 PS / 115 PS",
      drivetrain: "FWD",
      acceleration: "10.4 sec",
      seating: "5",
    },
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "tata-punch-2025",
    name: "Punch",
    brand: "Tata",
    year: "2025",
    price: "620000",
    rating: "4.3",
    specifications: {
      fuel: "Petrol & CNG",
      engine: "1199 cc",
      power: "88 PS & 115 Nm",
      drivetrain: "FWD",
      acceleration: "13 sec",
      seating: "5",
    },
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "tata-safari-2025",
    name: "Safari",
    brand: "Tata",
    year: "2025",
    price: "1550000",
    rating: "4.6",
    specifications: {
      fuel: "Diesel",
      engine: "1956 cc",
      power: "170 PS & 350 Nm",
      drivetrain: "FWD",
      acceleration: "12.2 sec",
      seating: "6/7",
    },
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "tata-harrier-2025",
    name: "Harrier",
    brand: "Tata",
    year: "2025",
    price: "1499000",
    rating: "4.4",
    specifications: {
      fuel: "Diesel",
      engine: "1956 cc",
      power: "170 PS & 350 Nm",
      drivetrain: "FWD",
      acceleration: "11.8 sec",
      seating: "5",
    },
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "mahindra-scorpio-n-2025",
    name: "Scorpio N",
    brand: "Mahindra",
    year: "2025",
    price: "1399000",
    rating: "4.6",
    specifications: {
      fuel: "Petrol & Diesel",
      engine: "1997 cc / 2198 cc",
      power: "203 PS / 175 PS",
      drivetrain: "RWD & 4WD",
      acceleration: "10.9 sec",
      seating: "6/7",
    },
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "mahindra-xuv700-2025",
    name: "XUV700",
    brand: "Mahindra",
    year: "2025",
    price: "1399000",
    rating: "4.7",
    specifications: {
      fuel: "Petrol & Diesel",
      engine: "1999 cc / 2198 cc",
      power: "200 PS / 185 PS",
      drivetrain: "FWD & AWD",
      acceleration: "9.8 sec",
      seating: "5/7",
    },
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "mahindra-thar-roxx-2025",
    name: "Thar Roxx",
    brand: "Mahindra",
    year: "2025",
    price: "1299000",
    rating: "4.5",
    specifications: {
      fuel: "Petrol & Diesel",
      engine: "1997 cc / 2184 cc",
      power: "162 PS / 152 PS",
      drivetrain: "RWD & 4WD",
      acceleration: "11.5 sec",
      seating: "5",
    },
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
  },
  {
    _id: "mahindra-be-6-2025",
    name: "BE 6",
    brand: "Mahindra",
    year: "2025",
    price: "1890000",
    rating: "4.3",
    specifications: {
      fuel: "Electric",
      engine: "59 kWh / 79 kWh Battery",
      power: "231 PS / 286 PS",
      drivetrain: "RWD",
      acceleration: "6.7 sec",
      seating: "5",
    },
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
  },
];

export const carsByBrand = brands.map((brand) => ({
  ...brand,
  cars: cars.filter((car) => car.brand === brand.name),
}));

export const latestCars = [...cars]
  .sort((firstCar, secondCar) => Number(secondCar.year) - Number(firstCar.year))
  .slice(0, 6);

export const topRatedCars = [...cars]
  .sort((firstCar, secondCar) => Number(secondCar.rating) - Number(firstCar.rating))
  .slice(0, 6);
