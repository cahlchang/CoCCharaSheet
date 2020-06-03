export const AbilityTypes = {
  STR: 'STR',
  CON: 'CON',
  POW: 'POW',
  DEX: 'DEX',
  APP: 'APP',
  SIZ: 'SIZ',
  INT: 'INT',
  EDU: 'EDU',
} as const

export type AbilityTypes = typeof AbilityTypes[keyof typeof AbilityTypes]

export interface IAbilities {
  str: number
  con: number
  pow: number
  dex: number
  app: number
  siz: number
  int: number
  edu: number
}

export class Abilities implements IAbilities {
  str: number = 0
  con: number = 0
  pow: number = 0
  dex: number = 0
  app: number = 0
  siz: number = 0
  int: number = 0
  edu: number = 0
}
