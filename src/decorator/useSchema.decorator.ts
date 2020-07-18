import { Schema } from 'yup';

export function UseSchema(schema: Schema<{}>) {
  return function (constructor: Function) {
    constructor.prototype.schema = schema;
  };
}
