interface Retailer {
  productId: number;
  productTitle: string;
  logoUrl: string;
  isAvailable: boolean;
  salePrice: string;
  directPurchaseLink?: any;
  purchaseLink: string;
  hasOffer: boolean;
  offerText?: any;
  partnerId: string;
  storeId: string;
  upc: string;
  sku: string;
  stock: number;
  retailerName: string;
  type: number;
}

interface ProductInfo {
  name: string;
  value: string;
}

interface CompareProductInfo {
  name: string;
  value: string;
}

export interface ICard {
  displayName: string;
  totalCount?: any;
  productID: number;
  imageURL: string;
  productTitle: string;
  digitialRiverID: string;
  productSKU: string;
  productUPC: string;
  productUPCOriginal: string;
  productPrice: string;
  productAvailable: boolean;
  productRating?: any;
  customerReviewCount?: any;
  isFounderEdition: boolean;
  isFeaturedProduct: boolean;
  certified: boolean;
  manufacturer: string;
  locale: string;
  isFeaturedProdcutFoundInSecondSearch: boolean;
  category: string;
  gpu: string;
  purchaseOption: string;
  prdStatus: string;
  minShipDays?: any;
  maxShipDays?: any;
  shipInfo?: any;
  isOffer: boolean;
  offerText: string;
  retailers: Retailer[];
  productInfo: ProductInfo[];
  compareProductInfo: CompareProductInfo[];
}
