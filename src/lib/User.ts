import { faker } from '@faker-js/faker';
import { ICordinates, IUser } from './utils/interfaces';

export class User implements IUser {
  name: string;

  location: ICordinates;

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
