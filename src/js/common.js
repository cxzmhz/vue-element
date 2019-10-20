
const valify = (valifyData) => {
  let isValify = true;
  valifyData.forEach(item => {
    item.rules.forEach(rule => {
      console.log(item.vnode)
      !rule(item.vnode.componentInstance.value) && (isValify = false)
    })
  })
  return Promise.resolve(isValify)
}

export { valify }
