
const valify = (valifys) => {
  let isValify = true;
  valifys.forEach(item => {
    item.rules.forEach(rule => {
      !rule(item.scopeRow[item.prop]) && (isValify = false)
    })
  })
  return Promise.resolve(isValify)
}

export { valify }
