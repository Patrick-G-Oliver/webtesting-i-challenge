module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
    Object.defineProperty(item, 'durability', {
      value: 100
    })
    // return an item whose durability === 100
    return {...item}
}

function get(item) {
  return { ...item };
}
