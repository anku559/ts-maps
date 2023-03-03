import { Company } from './Company';
import { User } from './User';
import { ICordinates, IMappable } from './utils/interfaces';

export default class CustomMap {
  #MAP_INS: google.maps.Map;

  constructor(element: HTMLElement) {
    this.#MAP_INS = new google.maps.Map(element, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(stamp: IMappable) {
    const markerObject: google.maps.ReadonlyMarkerOptions = {
      map: this.#MAP_INS,
      position: stamp.location,
    };

    const marker = new google.maps.Marker(markerObject);

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: stamp.markerContent(),
      });

      infoWindow.open(this.#MAP_INS, marker);
    });
  }

  // addCompanyMarker(
  //   companyName: string,
  //   title: string,
  //   locationObj: ICordinates,
  // ) {
  //   new google.maps.Marker({
  //     map: this.#MAP_INS,
  //     position: locationObj,
  //     title,
  //     clickable: true,
  //     label: companyName,
  //   });
  // }
}
