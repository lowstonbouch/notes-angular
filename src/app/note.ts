export class Note {
  id: number;
  title: string = '';
  tags: Array<string> = [];

  constructor( values: Object = {} )
  {
    Object.assign(this, values);
  }
}
