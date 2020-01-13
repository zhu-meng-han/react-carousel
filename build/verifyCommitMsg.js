const chalk = require('chalk'); // eslint-disable-line
const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim();

const commitRE = /^(v\d+\.\d+\.\d+(-(alpha|beta|rc.\d+))?)|(Merge (\(.+\))?)|((revert: )?(feat|fix|docs|style|refactor|perf|test|ci|chore|build)(\(.+\))?!?: .{1,50})/;
if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`revert: 回滚版本`)}\n` +
      `    ${chalk.green(`Merge xxxx`)}\n` +
      `    ${chalk.green(`feat(:sparkles:): 新增功能`)}\n` +
      `    ${chalk.green(`fix(:bug:): 修复bug`)}\n` +
      `    ${chalk.green(`docs(:memo:): 修改文档`)}\n` +
      `    ${chalk.green(`style(:lipstick:): 修改样式`)}\n` +
      `    ${chalk.green(
        `refactor(:recycle:): 代码重构和优化，即不是新增功能，也不是修改bug的代码变动`
      )}\n` +
      `    ${chalk.green(`perf(:zap:): 改善性能`)}\n` +
      `    ${chalk.green(`test(:white_check_mark:): 添加测试用例`)}\n` +
      `    ${chalk.green(`ci(:green_heart:): 自动化流程配置修改`)}\n` +
      `    ${chalk.green(`chore(:package:): 构建过程或辅助工具的变动`)}\n` +
      `    ${chalk.green(`build(:rocket:): 改变构建流程，新增依赖库和工具`)}\n\n` +
      chalk.red(`See https://zmh7057.github.io/learning-JavaScript/#/gitmoji for more details.\n`)
  );
  process.exit(1);
}
