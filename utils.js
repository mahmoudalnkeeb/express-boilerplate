exports.deleteByIndex = function (index, array) {
  if (index > -1) {
    array.splice(index, 1);
    return array
  }
};
