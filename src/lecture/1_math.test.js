import mathModule from './1_math';

// create a test
test('adds 1 + 2 to equal 3', () => {
  const result = mathModule.add(1, 2);
  expect(result).toBe(3);
  expect(result).not.toBeNull();
});

// toBe vs toEqual
test('toBe vs toEqual', () => {
  // toBe uses Object.is
  // expect({ a: 1 }).toBe({ a: 1 });

  // toEqual does deep compare
  expect({ a: { b: 1 } }).toEqual({ a: { b: 1 } });
});

// Array's/Iterables
const favoriteFoods = ['tacos', 'spinach', 'tofu', 'pancakes'];
test('the favorite foods should contain pancakes', () => {
  expect(favoriteFoods).toContain('pancakes');
});

// Exceptions
test('fails when trying to add anything that is not a number', () => {
  const run = () => mathModule.add('b', 10);
  expect(run).toThrow();
  expect(run).toThrow('parameters must be numbers');
});

// More about expect
// https://jestjs.io/docs/expect

// test suite
describe('enter description', () => {
  // example: setup DB connection
  beforeAll(() => {});

  // example: seeding some data before each test
  beforeEach(() => {});

  // example: tearing down DB connection
  afterAll(() => {});

  // example: cleaning up database
  afterEach(() => {});

  it('should test something', () => {});
});
