/**
 * Build npm lib
 */

// 这个库能够让我们在js文件中执行shell命令
// 基于node的一层命令封装插件
const shell = require('shelljs')
// 优雅的控制台日志输出工具
const signale = require('signale')

const { Signale } = signale
const tasks = [
  'build:entry',
  'build:theme',
  'lib'
]

tasks.forEach(task => {
  signale.start(task)

  const interactive = new Signale({ interactive: true })
  interactive.pending(task)
  shell.exec(`npm run ${task} --silent`)
  interactive.success(task)
})
