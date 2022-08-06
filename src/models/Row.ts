import Field from './Field'

export type Fields = {
  [id: number]: Field
}

class Row {
  fields: Fields = {}
  constructor(fields: Fields) {
    this.fields = fields
  }
}

export default Row