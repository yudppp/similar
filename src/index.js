
class Similar {
  constructor(list, alias={}) {
    let map = {}
    for(let w of list) {
      map[w] = w
    }
    for(let key in alias) {
      for(let w of alias[key]) {
        if(map[w] === void 0) {
          map[w] = key
        }
      }
    }
    this.map = map
  }
  check(word) {
    return this.map[word]
  }
}

module.exports = Similar
