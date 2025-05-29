module.exports = function towelSort(matrix) {
  const newArray = [];
  if (Array.isArray(matrix)) {
    for (let i = 0; i < matrix.length; i += 1) {
      if (Array.isArray(matrix[i])) {
        if ((i + 2) % 2 === 0) {
          newArray.push(...matrix[i]);
        } else {
          newArray.push(...matrix[i].reverse());
        }
      }
    }
  }
  return newArray;
};
