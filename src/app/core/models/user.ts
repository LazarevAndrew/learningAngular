export interface User {
  id: number;
  email: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  username: string;
  image: string;
  bio: string;
  token: string;
}
