import Store from "../store/index"
const directive = (Vue) => {
  Vue.directive("require", {
    bind(el, binding, vnode) {
      console.log(vnode)
      let scopeRow = vnode.data.attrs.scopeRow
      let { collection, prop } = binding.value.space
      let collections = Store.state.space[collection] = Store.state.space[collection] || []
      let props = { prop, rules: [], scopeRow }
      props.rules = binding.value.rules.map(rule => {
        let infoFn = (data) => {
          let res = rule.handler(data) || { suc: true, msg: "" }
          if (!res.suc) {
            el.classList.add("is-require")
            el.dataset.word = res.msg
          } else {
            el.classList.remove("is-require")
            el.dataset.word = res.msg
          }
          return res.suc
        }
        el.addEventListener(rule.trigger, (e) => {
          infoFn(e.target.value)
        })
        return (data) => {
          infoFn(data)
        }
      })
      collections.push(props)
    }
  });
  Vue.directive("test", {
    bind(el, binding) {
      console.log(binding.value)
    }
  })
}

export default directive
