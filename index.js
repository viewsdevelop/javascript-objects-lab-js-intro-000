function updateObjectWithKeyAndValue(object, key, value) {
  var newPair[key] = value;
  var newObject = Object.assign(object, newPair);
  return newObject;
}
