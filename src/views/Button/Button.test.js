import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('renders correctly', () => {
    const tree = renderer
      .create(<Button page="http://www.facebook.com">Facebook</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});



test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  it('works with promises', () => {
    expect.assertions(1);
    return fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
    .then(data => expect(data.title).toEqual(undefined));
  });

