const _isNumber = (value) => typeof value === 'number' && isFinite(value);

const add = (a, b) => {
  if (!_isNumber(a) || !_isNumber(b)) {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};

const average = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('parameter must be an array');
  }

  return (
    array.reduce((prev, curr) => {
      prev += curr;
      return prev;
    }, 0) / array.length
  );
};

export default {
  add,
  average,
};
