import Players from './Players'

class Field {
  touched: Players | undefined

  constructor(touched: Players | undefined) {
    this.touched = touched
  }
}

export default Field