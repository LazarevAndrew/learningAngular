import {Profile} from './profile';
import {Comment} from './comment';

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string | Date;
  favoritesCount: number;
  image?: string;
  author?: Profile;
  comments?: Comment[];
}
