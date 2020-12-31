export class Project {
  id: string;
  name: string;
  description: string;
  type: string;
  forceDelete?: boolean;

  constructor(
    id: string = '',
    name: string = '',
    description: string = '',
    type: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
  }
}
