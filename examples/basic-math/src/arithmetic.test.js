import { describe, it, expect } from 'vitest';
import {add} from "./arithmetic.js"

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  })
  it('shoud add two negative numbers',()=>{
    expect(add(-2, -3)).toBe(-5);
  })
  it('should parse string into numbers',()=>{
    expect(add('2', '3')).toBe(5);
  })
  it('should get real angry if string is not a number', () => {
    expect(() => add(2, 'potato')).toThrow("Invalid number: potato");
  })
  it('should throw and error if array is passed', () => {
    expect(() => add(2, [2,3])).toThrow("Invalid number: 2,3");
  })
  it('should add 0 if no other argument is passed', () => {
    expect(() => (add(2)).toThrow("Invalid number: undefined"));
  })
});                            

describe.todo('subtract', () => {});

describe.todo('multiply', () => {});

describe.todo('divide', () => {});
