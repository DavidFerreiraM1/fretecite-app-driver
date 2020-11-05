import {FreightType, Situation} from '../enums';

export interface Freight {
  id: string;
  date: string;
  origin: string;
  destiny: string;
  type: FreightType;
  description: string;
  situation: Situation;
  customerUserId: string;
  transporterUserId: string;
}
