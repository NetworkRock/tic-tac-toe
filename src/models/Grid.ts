import Field from "./Field";
import Row, { Fields } from "./Row";
import Players from "./Players";

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

  allFieldsTouched(rows: Rows) {
    return Object.values(rows).every((row: Row) =>
      Object.values(row.fields).every(
        (field: Field) => field.touched !== undefined
      )
    );
  }

  checkWinning(rows: Rows, currentRowId: number, currentFieldId: number) {
    // Check all rows horizontally
    if (
      Object.values(rows[currentRowId].fields).every(
        (field) => field.touched === Players.X
      ) ||
      Object.values(rows[currentRowId].fields).every(
        (field) => field.touched === Players.O
      )
    ) {
      return true;
    }

    // Check all vertically fields
    if (
      Object.values(rows).every(
        (row) => row.fields[currentFieldId].touched === Players.X
      ) ||
      Object.values(rows).every(
        (row) => row.fields[currentFieldId].touched === Players.O
      )
    ) {
      return true;
    }

    const gridSize = Object.keys(rows).length - 1;

    // Check from top left to bottom right
    if (
      Object.values(rows).every(
        (row, index) => row.fields[index].touched === Players.X
      ) ||
      Object.values(rows).every(
        (row, index) => row.fields[index].touched === Players.O
      )
    ) {
      return true;
    }

    if (
      Object.values(rows).every(
        (row, index) => row.fields[gridSize - index].touched === Players.X
      ) ||
      Object.values(rows).every(
        (row, index) => row.fields[gridSize - index].touched === Players.O
      )
    ) {
      return true;
    }

    return false;
  }
}

export default Grid;
