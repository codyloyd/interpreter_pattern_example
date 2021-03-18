export class Context {
  constructor() {
    this.chars = {} 
  }
  // returns bool
  lookup(varName) {
    return this.chars[varName]
  }

  assign(variableExp, bool) {
    this.chars[variableExp.getName()] = bool
  }
}
