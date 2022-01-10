var gitxsfh = {
  chunk: function (array, size) {
    let a = []
    let result = []
    let total = 0
    while (total < array.length) {
      let every = 0
      while (every < size) {
        if (array[total]) {
          a.push(array[total])
          total++
        }
        every++
      }
      result.push(a)
      a = []
    }
    return result
  },

  compact: function (array) {
    let result = []
    let long = array.length
    for (let i = 0; i < long; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },
  drop: function (array, n = 1) {
    if (n >= array.length) {
      return []
    }
    let result = array
    for (let i = 0; i < n; i++) {
      if (array[i]) {
        result.shift()
      }
    }
    return result
  },
  dropRight: function (array, n = 1) {
    if (n >= array.length) {
      return []
    }
    let result = array
    for (let i = 0; i < n; i++) {
      if (array[i]) {
        result.pop()
      }
    }
    return result
  },
}
