// A column-major data structure is an efficient way of storing tabular data.
// A typical implementation in javascript can be achieve via an object of arrays e.g.

const table = {
  name: ['alice', 'bob', 'charly'],
  age: [25, 50, 30],
  email: ['alice@gmail.com', null, 'charly@gmail.com']
}

// A 'lookup function' is the analogue of the the common Array.prototype.find method for tables, that is,
// given a table and a known (column, value) pair; lookup will return the corresponding value for the desiredKey
// for example lookup(table, 'name', 'bob', 'age') returns the age of bob which is 50
// lookup(table, 'email', 'charly@gmail.com', 'name') returns the name that corresponds to the given email, in this case it's 'charly'
// write a function that implements lookup for an arbitrary table
// keep in mind your function will be extensively called (for example it could be a part of a library) so caching is a good idea.


const cache = {}


export const lookup = (table, column, knownValue, desiredKey) => {
  /* implement lookup */
  const cacheKey = `${column}:${knownValue}:${desiredKey}`;
  
  if (cacheKey in cache) {
    return cache[cacheKey];
  }

  const index = table[column].indexOf(knownValue)
  const value=  table[desiredKey][index]
  cache[cacheKey] = value;
  return value;
}