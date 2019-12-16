const chalk = require('chalk')  // eslint-disable-line
const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(v\d+\.\d+\.\d+(-(alpha|beta|rc.\d+))?)|((revert: )?(feat|fix|docs|style|refactor|perf|test|ci|chore|build)(\(.+\))?!?: .{1,50})/
if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
    chalk.red(`  Proper commit message format is required for automated changelog generation. Examples:\n\n`) +
    `    ${chalk.green(`revert: feat(pencil): add 'xxx' option`)}\n` +
    `    ${chalk.green(`feat(:sparkles:): add 'comments' option`)}\n` +
    `    ${chalk.green(`fix(:bug:): handle events on blur (close #1)`)}\n` +
    `    ${chalk.green(`docs(:memo:): update README.md`)}\n` +
    `    ${chalk.green(`style(:lipstick:): update 'XXX.scss' style`)}\n` +
    `    ${chalk.green(`refactor(:recycle:): refactor 'XXX' module`)}\n` +
    `    ${chalk.green(`perf(:zap:): improve 'XXX' module pref`)}\n` +
    `    ${chalk.green(`test(:white_check_mark:): add 'XXX' module test`)}\n` +
    `    ${chalk.green(`ci(:green_heart:): update ci`)}\n` +
    `    ${chalk.green(`chore(:package:): Changes in the build process or aids`)}\n` +
    `    ${chalk.green(`build(:rocket:): handle events on blur (close #1)`)}\n\n` +
    chalk.red(`  See https://zmh7057.github.io/learning-JavaScript/#/gitmoji for more details.\n`)
  )
  process.exit(1)
}
