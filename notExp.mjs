import {BooleanExp} from './booleanExp.mjs'

export class NotExp extends BooleanExp {
  constructor(booleanExp) {
    super()
    this._operand = booleanExp
  }

  evaluate(context) {
    return !this._operand.evaluate(context)
  }
}