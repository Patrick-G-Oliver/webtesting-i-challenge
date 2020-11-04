module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement >= 20) {
    return (item)
  } else {
    Object.defineProperty(item, 'enhancement', {
      value: item.enhancement += 1
    })
    return {...item}
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  // see Object.defineProperty() on MDN web docs page
  // The arguments passed here to Object.defineProperty() are the object to be modified (item), the property on that object 
  // to be defined/modified (durability), and the "descriptor" of the property (in this case, the value (100) to be assigned to the 
  // "item" object's "durability" property).
    Object.defineProperty(item, 'durability', {
      value: 100
    })
    // return an item whose durability === 100
    return {...item}
}

function get(item) {
  return { ...item };
}
