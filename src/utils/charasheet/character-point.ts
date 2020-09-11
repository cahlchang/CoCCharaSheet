import { DiceType } from '~/utils/dice'

export const CharacterPointType = {
  str: 'STR',
  con: 'CON',
  pow: 'POW',
  dex: 'DEX',
  app: 'APP',
  siz: 'SIZ',
  int: 'INT',
  edu: 'EDU',
} as const

type CharacterPointKey = keyof typeof CharacterPointType

export type CharacterPointType = typeof CharacterPointType[CharacterPointKey]

export const CharacterPointDice: {[key in CharacterPointKey]: DiceType} = {
  str: [3, 6],
  con: [3, 6],
  pow: [3, 6],
  dex: [3, 6],
  app: [3, 6],
  siz: [3, 6],
  int: [2, 6, 6],
  edu: [3, 6, 6],
}

export type ICharacterPoints = {[key in CharacterPointKey]: number}

export class CharacterPoints implements ICharacterPoints {
  str: number = 0
  con: number = 0
  pow: number = 0
  dex: number = 0
  app: number = 0
  siz: number = 0
  int: number = 0
  edu: number = 0
}
