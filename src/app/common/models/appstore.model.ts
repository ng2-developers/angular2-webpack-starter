import { User } from './user.model';
import { Product } from './product.model';

export interface AppStore {
  user: User;
  product: Product;
};
