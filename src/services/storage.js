export default {
  set (key, value) {
    window.localStorage[key] = value
    return window.localStorage[key]
  },
  get (key, defaultValue) {
    return window.localStorage[key] || defaultValue
  },
  setObject (key, value) {
    window.localStorage[key] = JSON.stringify(value)
  },
  getObject (key) {
    return JSON.parse(window.localStorage[key] || null)
  },
  getAllObject () {
    let todo = window.localStorage
    let list = []
    Object.keys(todo).map((key) => {
      let item = JSON.parse(todo[key])
      list.push({
        id: key,
        title: item.title,
        description: item.description
      })
    })
    return list
  },
  remove (key) {
    window.localStorage.removeItem(key)
  }
}

