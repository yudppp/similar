
class Similar {
  constructor(list, alias={}) {
    this.list = list
    this.alias = alias

  }
  check(word) {
    for(let w of this.list) {
      if(w === word) {
        return word
      }
    }
    // use alias
    for(let key in this.alias) {
      for(let w of this.alias[key]) {
        if(w === word) {
          return key
        }
      }
    }


    return ""
  }
}

module.exports = Similar
