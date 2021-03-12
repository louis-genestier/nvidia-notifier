import { ICard } from '../interfaces/ICard';
import fetch, { Response } from 'node-fetch';

export default async (url: string): Promise<ICard> => {
  const response: Response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36',
      'origin': 'https://shop.nvidia.com',
      'referer': 'https://shop.nvidia.com/',
      'pragma': 'no-cache',
      'cache-control': 'no-cache',
      'authority': 'api.nvidia.partners'
    }
  });

  const { searchedProducts } = await response.json();
  return searchedProducts.featuredProduct as ICard;
}
