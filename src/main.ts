import { User } from './lib/User';
import { Company } from './lib/Company';
import CustomMap from './lib/CustomMap';

const user1 = new User();
console.log(user1);

const company1 = new Company();
console.log(company1);

const mapDiv = document.getElementById('map') as HTMLElement;
const customMapIns = new CustomMap(mapDiv);
customMapIns.addMarker(user1);
customMapIns.addMarker(company1);
// L - 60
