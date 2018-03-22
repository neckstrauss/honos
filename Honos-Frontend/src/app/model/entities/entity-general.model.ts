import { Estado } from './generales/estado.model';
export class EntityGeneral {

  constructor(
    public id?: number,
    public estado?: Estado,
    public type?: any
  ) {};

}