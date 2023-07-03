function getListStudentIds(array) {
  if (array instanceof Array) {
    array.map((arrayItem) => arrayItem.id);
  } else {
    return [];
  }
}
