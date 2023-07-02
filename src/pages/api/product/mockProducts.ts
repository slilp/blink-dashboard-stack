export interface IProduct {
  code: string;
  name: string;
  colorLabel: string;
  colorCode: string;
  img: string;
  brand: string;
  status: "selling" | "stop" | "waiting";
}

export const mockProducts: IProduct[] = [
  {
    code: "P0001",
    name: "Samsung Galaxy A34",
    brand: "Samsung",
    colorLabel: "violet",
    colorCode: "#b9b7d4",
    img: "/products/samsung-a34-violet.jpeg",
    status: "selling",
  },
  {
    code: "P0009",
    name: "Xiaomi 12",
    colorLabel: "blue",
    colorCode: "#4e8aa6",
    brand: "Xiaomi",
    img: "/products/xiaomi-12-blue.jpeg",
    status: "selling",
  },
  {
    code: "P0002",
    name: "Samsung Galaxy A34",
    brand: "Samsung",
    colorLabel: "black",
    colorCode: "#000000",
    img: "/products/samsung-a34-black.jpeg",
    status: "selling",
  },
  {
    code: "P0005",
    name: "iPhone 14 Plus",
    brand: "Apple",
    colorLabel: "yellow",
    colorCode: "#e7f20c",
    img: "/products/iphone-14-plus-yellow.webp",
    status: "selling",
  },
  {
    code: "P0006",
    name: "iPhone 14",
    brand: "Apple",
    colorLabel: "green",
    colorCode: "#585c06",
    img: "/products/iphone-14-green.webp",
    status: "selling",
  },
  {
    code: "P0007",
    name: "iPhone 13 mini",
    brand: "Apple",
    colorLabel: "pink",
    colorCode: "#fa84f0",
    img: "/products/iphone-13-mini-pink.webp",
    status: "stop",
  },
  {
    code: "P0003",
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    colorLabel: "black",
    colorCode: "#000000",
    img: "/products/samsung-s23-gold.jpeg",
    status: "waiting",
  },
  {
    code: "P0004",
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    colorLabel: "black",
    colorCode: "#000000",
    img: "/products/iphone-14-pro-black.webp",
    status: "waiting",
  },
  {
    code: "P0008",
    name: "Xiaomi 13",
    colorLabel: "white",
    colorCode: "#ffffff",
    brand: "Xiaomi",
    img: "/products/xiaomi-13-white.jpeg",
    status: "selling",
  },
];
