import { StaticImageData } from "next/image"

type ShoppingItem = {
  image: StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  content: string;
  price: number;
  specialPrice: number;
}