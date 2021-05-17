const {Command} = require('@oclif/command')
const {calculator} = require('./Modules/calculator')

class CalculatorCommand extends Command {
  static args = [
    {name: 'firstArg',
    required: true,
    description: 'Expression String',},
  ]

  async run() {
    // can get args as an object
    const {args} = this.parse(CalculatorCommand)
    const result = calculator(args.firstArg)
    console.log(result)
    // can also get the args as an array
    // const {argv} = this.parse(CalculatorCommand)
    // console.log(`running my command with args: ${argv[0]}`)
  }
}

CalculatorCommand.description = `Calculator for S-Expressions`


module.exports = CalculatorCommand
