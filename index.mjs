import { VariableExp } from './variableExp.mjs'
import { AndExp } from './andExp.mjs'
import { OrExp } from './orExp.mjs'
import { NotExp } from './notExp.mjs'
import { Context } from './context.mjs'
import { Constant } from './constant.mjs'

const context = new Context()

const x = new VariableExp("X")
const y = new VariableExp("Y")

// (true and x) or (y and (not x))
const expression = new OrExp(
  new AndExp(new Constant(true), x),
  new AndExp(y, new NotExp(x))
)

context.assign(x, true)
context.assign(y, false)

const result = expression.evaluate(context)

console.log(result)