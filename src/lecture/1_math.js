const _isNumber = (value) => typeof value === "number" && isFinite(value);

const add = (a, b) => {
  if (!_isNumber(a) || !_isNumber(b)) {
    throw new Error("parameters must be numbers");
  }
  return a + b;
};

const average = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("parameter must be an array");
  }

  return (
    array.reduce((prev, curr) => {
      prev += curr;
      return prev;
    }, 0) / array.length
  );
};

const boundingBox2D = (points) => {
  if (!Array.isArray(points)) {
    throw new Error("parameter must be an array");
  }
  const min = { x: Infinity, y: Infinity };
  const max = { x: -Infinity, y: -Infinity };

  points.forEach((point) => {
    if (point.x < min.x) {
      min.x = point.x;
    }
    if (point.x > max.x) {
      max.x = point.x;
    }
    if (point.y < min.y) {
      min.y = point.y;
    }
    if (point.y > max.y) {
      max.y = point.y;
    }
  });

  return { min, max };
};

const clamp = (points, min, max) => {
  if (!Array.isArray(points)) {
    throw new Error("parameter must be an array");
  }
  if (!_isNumber(min) || !_isNumber(max)) {
    throw new Error("parameters must be numbers");
  }

  return points.map((point) => {
    return {
      x: Math.max(min, Math.min(max, point.x)),
      y: Math.max(min, Math.min(max, point.y)),
    };
  });
};

const math = {
  add,
  average,
  boundingBox2D,
  clamp,
};

export default math;
