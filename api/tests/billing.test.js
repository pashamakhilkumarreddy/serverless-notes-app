import { calculateCost } from '../libs/billing-lib';

test('Lowest tier', () => {
  const storage = 10;
  const cost = 4000;
  const expectedCost = calculateCost(storage);
  expect(cost).toEqual(expectedCost);
});

test('Middle tier', () => {
  const storage = 99;
  const cost = 19800;
  const expectedCost = calculateCost(storage);
  expect(cost).toEqual(expectedCost);
});

test('High tier', () => {
  const storage = 120;
  const cost = 12000;
  const expectedCost = calculateCost(storage);
  expect(cost).toEqual(expectedCost);
});

