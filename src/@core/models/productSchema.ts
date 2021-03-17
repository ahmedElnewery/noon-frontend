interface IProduct {

  //required
  name: string;
  image: string[];
  brand: string;
  description: string,
  countInStock: number,
  price: number,
  category: string,
  subcategory: string,
  overview: string,
  // required but has default value
  rating: number, //default = 0
  numReviews: number, //default = 0
  discount: number, //default = 0
  //not Required
  //>>fashion
  //  (men Wear,women Wear, kids Wear)
  size?: String,
  material?: String,
  color?: String,

  //>> electronics
  //(mobiles)
  screenSize?: string,
  internalMemory?: string,
  battery?: string,
  //(labtops)
  operatingSystem?: string,
  memorySize?: string,
  proccessor?: string,
  //(tv)
  tvScreenSize?: string,
  noOfUsbPort?: string,

  //>> home
  //(kitchen,homeDecore)

  baseMaterial?: string,
  //>> health& beauty
  //(makeup)
  foundation?: string,
  //(skinCare)
  skinType?: string,
  //(tv)
  hairType?: string,
  formulation?: string,


}
