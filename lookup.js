// A column-major data structure is an efficient way of storing tabular data.
// A typical implementation in javascript can be achieve via an object of arrays e.g.

const table = {
  name: ['alice', 'bob', 'charly'],
  age: [25, 50, 30],
  email: ['alice@gmail.com', null, 'charly@gmail.com']
}

const isValidValue = (tableName) => Object.keys(table).find(key => key === tableName) 

let cache = {}

// A 'lookup function' is the analogue of the the common Array.prototype.find method for tables, that is,
// given a table and a known (column, value) pair; lookup will return the corresponding value for the desiredKey
// for example lookup(table, 'name', 'bob', 'age') returns the age of bob which is 50
// lookup(table, 'email', 'charly@gmail.com', 'name') returns the name that corresponds to the given email, in this case it's 'charly'
// write a function that implements lookup for an arbitrary table
// keep in mind your function will be extensively called (for example it could be a part of a library) so caching is a good idea.

const lookup = (column, knownValue, desiredKey) => {
  /* implement lookup */
  if (isValidValue(column) !== undefined && isValidValue(desiredKey) !== undefined) {
    const valueIndex = table[column].findIndex(value => value === knownValue)
    const cacheKey = `${column}:${knownValue}:${desiredKey}`;

    if (cacheKey in cache) return `${cache[cacheKey]} from cache`;

    if (valueIndex !== -1) {
      const result = table[desiredKey][valueIndex];
      cache[cacheKey] = result;
      return result;
    } else {
      throw Error("Error: value not found.")
    }
  } else {
    throw Error("Error: 'column' or 'desiredKey' is not a valid key value for 'table'.")
  }
}

console.log(lookup('name', 'bob', 'age')) // 50
console.log(lookup('name', 'bob', 'age')) // 50 from cache
console.log(lookup('email', 'charly@gmail.com', 'name')) // charly
console.log(lookup('pan', 'bob', 'age')) // error
