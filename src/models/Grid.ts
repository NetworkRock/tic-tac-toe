import Field from "./Field";
import Row, { Fields } from "./Row";

export type Rows = {
  [id: number]: Row;
};

class Grid {
  rows: Rows = {};
  constructor(numberOfRows: number, numberOfFields: number) {
    for (let x = 0; x < numberOfRows; x++) {
      let fields: Fields = {};
      for (let y = 0; y < numberOfFields; y++) {
        fields = {
          ...fields,
          [y as number]: new Field(undefined),
        };
      }
      this.rows = {
        ...this.rows,
        [x as number]: new Row(fields),
      };
    }
  }
}

export default Grid;
