const functions = require('./functions');

test('Adds 2 + 2 to equal 4', ()=>  {
  const sum = functions.add(2,2);
  expect(sum).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', ()=>  {
  const sum = functions.add(2,2);
  expect(sum).not.toBe(5);
});

test('Should be null', ()=>  {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', ()=>  {
  expect(functions.checkValue(null)).toBeFalsy();
});