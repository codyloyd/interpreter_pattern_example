import {BooleanExp} from './booleanExp.mjs'

export class AndExp extends BooleanExp {
  constructor(booleanExp1, booleanExp2) {
    super()
    this._operand1 = booleanExp1
    this._operand2 = booleanExp2
  }

  evaluate(context) {
    return this._operand1.evaluate(context) && this._operand2.evaluate(context)
  }
}