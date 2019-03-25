// 对外提供对组件的引用。
// 导入组件，注意组件必须声明 name
import test from './src/test'
// 为组件提供 install 安装方法，供按需引入
test.install = Vue => {
  Vue.component(test.name, test)
}
export default test
