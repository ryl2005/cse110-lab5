// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('returns true for a phone number with area code parentheses', () => {
    expect(isPhoneNumber('(858) 555-1234')).toBe(true);
  });

  test('returns true for a phone number with a dashed area code', () => {
    expect(isPhoneNumber('858-555-1234')).toBe(true);
  });

  test('returns false for a phone number without a dash before the last four digits', () => {
    expect(isPhoneNumber('8585551234')).toBe(false);
  });

  test('returns false for a phone number with too few final digits', () => {
    expect(isPhoneNumber('858-555-123')).toBe(false);
  });
});

describe('isEmail', () => {
  test('returns true for a simple email address', () => {
    expect(isEmail('student@example.com')).toBe(true);
  });

  test('returns true for an email address with numbers in the username', () => {
    expect(isEmail('student110@ucsd.edu')).toBe(true);
  });

  test('returns false for an email address missing an at symbol', () => {
    expect(isEmail('student.example.com')).toBe(false);
  });

  test('returns false for an email address with a one-letter top-level domain', () => {
    expect(isEmail('student@example.c')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('returns true for a password that starts with a letter and contains digits', () => {
    expect(isStrongPassword('Password1')).toBe(true);
  });

  test('returns true for a password that contains an underscore', () => {
    expect(isStrongPassword('abc_123')).toBe(true);
  });

  test('returns false for a password that starts with a digit', () => {
    expect(isStrongPassword('1Password')).toBe(false);
  });

  test('returns false for a password with fewer than four characters', () => {
    expect(isStrongPassword('abc')).toBe(false);
  });
});

describe('isDate', () => {
  test('returns true for a date with one-digit month and day values', () => {
    expect(isDate('1/2/2026')).toBe(true);
  });

  test('returns true for a date with two-digit month and day values', () => {
    expect(isDate('12/31/2026')).toBe(true);
  });

  test('returns false for a date that uses dashes', () => {
    expect(isDate('12-31-2026')).toBe(false);
  });

  test('returns false for a date with a two-digit year', () => {
    expect(isDate('12/31/26')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('returns true for a three-character hex color with a hash', () => {
    expect(isHexColor('#fff')).toBe(true);
  });

  test('returns true for a six-character hex color without a hash', () => {
    expect(isHexColor('1A2b3C')).toBe(true);
  });

  test('returns false for a hex color with invalid characters', () => {
    expect(isHexColor('#ggg')).toBe(false);
  });

  test('returns false for a hex color with the wrong length', () => {
    expect(isHexColor('#ffff')).toBe(false);
  });
});
