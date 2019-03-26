/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import XrTest from './test'
    const version = '0.3.0'
    const components = [
      XrTest
    ]
    const install = Vue => {
      if (install.installed) return
      install.installed = true
      components.forEach(Component => {
        Vue.use(Component)
      })
    };
    /* istanbul ignore if */
    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }
    export {
      install,
      version,
      XrTest
    }
    export default {
      install,
      version
    }
    