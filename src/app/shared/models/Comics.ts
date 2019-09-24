import { ComicsItem } from './ComicsItem';

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}
