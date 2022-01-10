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
  findIndex: function (array, predicate, fromIndex = 0) {
    for (fromIndex = 0; fromIndex < array.length; fromIndex++) {
      for (let i in array[fromIndex]) {
      }
    }
    return fromIndex
  },


  flatten: function (array) {
    let newa = [].concat.apply([], array);
    return newa
  },

  flattenDeep: function (array) {
    return array.reduce((prev, curr) => {
      return prev.concat(Array.isArray(curr) ? flattenDeep(array) : array)
    }, [])
  },
  fromPairs: function (pairs) {
    let total = pairs.length
    let result = {}
    for (let i = 0; i < total; i++) {
      let j = 0
      result[pairs[i][j]] = pairs[i][j + 1]
    }
    return result
  },



}

