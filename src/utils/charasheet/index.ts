import { CharacterPoints, CharacterPointType, CharacterPointDice, ICharacterPoints } from './character-point'

export {
  CharacterPoints,
  CharacterPointType,
  CharacterPointDice,
  ICharacterPoints,
}

export class Character {
  name: string

  basePoints: CharacterPoints

  temporaryPoints: CharacterPoints

  get initSAN(): number {
    return (this.basePoints.pow + this.temporaryPoints.pow) * 5
  }

  constructor(
    name: string = '',
    points: CharacterPoints = new CharacterPoints(),
  ) {
    this.name = name
    this.basePoints = points
    this.temporaryPoints = new CharacterPoints()
  }
}
