import { BooleanExp } from './booleanExp.mjs'

export class VariableExp extends BooleanExp {
  constructor(name) {
    super()
    this._name = name
  }

  // returns bool
  evaluate(context) {
    return context.lookup(this._name)
  }

  getName() {
    return this._name
  }
}
