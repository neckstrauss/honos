import { Natural } from './natural.model';
export class Apoderado extends Natural {

  constructor(
    public urlFoto?: string,
    public numeroTarjetaProfesional?: string,
    public email?: string
  ) {
    super();
  };


}
