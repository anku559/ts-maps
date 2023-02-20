import { faker } from '@faker-js/faker';
import { ICordinates } from './utils/interfaces';

export class Company {
  name: string;

  catchPhrase: string;

  location: ICordinates;

  constructor() {}
}
