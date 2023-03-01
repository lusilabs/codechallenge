// A column-major data structure is an efficient way of storing tabular data.
// A typical implementation in javascript can be achieved via an object of arrays e.g.

const table = {
  name: ['alice', 'bob', 'charly', 'david', 'eve', 'fred', 'george'],
  age: [25, 50, 30, 31, 40, 60, 21],
  email: ['alice@gmail.com', null, 'charly@gmail.com', 'david@gmail.com', 'eve@yahoo.com', 'fred@hotmail.com', 'george@hotmail.com']
}

// A 'lookup function' is the equivalent of the Array.prototype.find method for tables, that is,
// given a table and a known (column, knownValue) pair; lookup will return the corresponding value for the desiredKey
// For example: lookup(table, 'name', 'bob', 'age') returns the age of bob, which is 50
// lookup(table, 'email', 'charly@gmail.com', 'name') returns the name that corresponds to the given email, in this case it's 'charly'

// Write a function that implements lookup for an arbitrary table,
// keep in mind your function will be extensively called (for example it could be a part of a library) so speed is paramount.

export const lookup = (table, column, knownValue, desiredKey) => {

  //simple conditionals👇🏽
  if (!(column in table) || !(desiredKey in table) || !Object.keys(table).length) return null;

  // implementing lookup function using linear search!👇🏽

  let hash;

  table[column].forEach((value, index) => {
    if (value === knownValue) {
      return hash = table[desiredKey][index];
    }
  });

  return hash;
}
