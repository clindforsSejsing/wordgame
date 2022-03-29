/**
 * @jest-environment jsdom
 */

import { sortWords } from '../routes/sortWords';

test('Users clicks to set a randomised word of four letters', () => {
  expect(sortWords(['LÅSKOLV', 'NYCKEL', 'LÅSA', 'TRE'], 4)).toBe('LÅSA');
});

test('Users clicks to set a randomised word of five letters', () => {
  expect(sortWords(['LÅSKOLV', 'NYCKEL', 'LÅSA', 'TRE', 'ALLAS'], 5)).toBe(
    'ALLAS'
  );
});

test('Users clicks to set a randomised word of six letters', () => {
  expect(sortWords(['LÅSKOLV', 'NYCKEL', 'LÅSA', 'TRE', 'ALLAS'], 6)).toBe(
    'NYCKEL'
  );
});

test('Users clicks to set a randomised word of seven letters', () => {
  expect(sortWords(['LÅSKOLV', 'NYCKEL', 'LÅSA', 'TRE', 'ALLAS'], 7)).toBe(
    'LÅSKOLV'
  );
});
