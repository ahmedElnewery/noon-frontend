import { IReview } from "./IReview";

export interface IProduct {
  name: string;
  image: string[];
  brand: string;
  category: string;
  description: string;
  countInStock: number;
  price: number;
  rating: number;
  numReviews: number;
  review?:IReview[]
}
