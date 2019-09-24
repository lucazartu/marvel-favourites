import { URL } from './URL';
import { Thumbnail } from './Thumbnail';
import { Stories } from './Stories';
import { Comics } from './Comics';

export interface Result {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
}
