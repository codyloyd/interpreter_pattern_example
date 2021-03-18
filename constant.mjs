import {BooleanExp} from "./booleanExp.mjs"

export class Constant extends BooleanExp {
  constructor(value) {
    super()
    this._value = value
  }

  evaluate(context) {
    return this._value
  }
}