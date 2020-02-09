const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', ()=>  {
  const sum = functions.add(2,2);
  expect(sum).toBe(4);
});

// not.toBe
test('Adds 2 + 2 to NOT equal 5', ()=>  {
  const sum = functions.add(2,2);
  expect(sum).not.toBe(5);
});

// toBeNull
test('Should be null', ()=>  {
  expect(functions.isNull()).toBeNull();
});


// toBeFalsy
test('Should be falsy', ()=>  {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toStructEqual or toEqual
test('User should be Brad Traversy object', ()=>  {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad', lastName: 'Traversy'
  });
});

// lest than and greater than 
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// regex
test('There is no I in team', ()=> {
  expect('team').not.toMatch(/I/i);
});

test('Admin should be in usernames ', ()=> {
  const usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// working with async data
// // promie
// test('User fetched name should be Leanne Graham', ()=> {
//   // Verifies that .then of promise is called
//   expect.assertions(1);
//   // Return the promise or test will complete before promise is complete
//   return functions.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual('Leanne Graham');
//     })
//     .catch(err=> 'error');
// });

// Async/await
test('User fetched name should be Leanne Graham', async ()=> {
  try {
    // Verifies that .then of promise is called
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
  } catch (error) {
    console.error(error)
  }
});