import { StoriesItem } from './StoriesItem';

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}
