import Players from './Players'

interface Score {
  [Players.X]: number
  [Players.O]: number
}

export default Score