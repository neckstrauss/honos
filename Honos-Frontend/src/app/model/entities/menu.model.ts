export class Menu {

  constructor(public id: number,
    public label: string,
    public idDivInterno: string,
    public estado: string,
    public opciones: {
      label: string;
      uri: string;
    }[]) {};

}