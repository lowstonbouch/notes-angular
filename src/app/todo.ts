export class Todo {
  id: number;
  title: string = '';
  tags: Array<string> = [];

  constructor( values: Object = {} )
  {
    Object.assign(this, values);
  }
}
