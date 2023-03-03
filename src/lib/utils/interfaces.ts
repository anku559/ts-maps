export interface ICordinates {
  lat: number;
  lng: number;
}

export interface IUser {
  name: string;
  location: ICordinates;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  location: ICordinates;
}

export interface IMappable {
  location: ICordinates;
  markerContent(): string;
  color: string;
}
