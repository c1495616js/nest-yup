import { SchemaOf } from 'yup';

export function UseSchema(schema: SchemaOf<{}>) {
  return function (constructor: Function) {
    constructor.prototype.schema = schema;
  };
}
