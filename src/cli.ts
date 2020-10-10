import Cli from './components/Cli'
import chalk from 'chalk'

const cli = new Cli()
cli.soSomething()
console.log(chalk.green('Hello World 22'))
console.log(`CLI Status is ${cli.CLIENT_INFO.username}`)