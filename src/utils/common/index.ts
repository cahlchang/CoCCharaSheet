export { range } from './range'

export type NominalType<Name extends string, T> = { type: Name } & T
