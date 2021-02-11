'use strict';

import getSomethings from '../src';

describe('module', () => {
  test('getSomethings', () => {
    expect(getSomethings()).toBe(undefined);
  });
});
