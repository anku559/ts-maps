import { faker } from '@faker-js/faker';
import { ICordinates } from './utils/interfaces';

export class User {
  name: string;

  location: ICordinates;

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }
}
