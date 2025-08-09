import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  it(
    'should create a character with a first name, last name, and role',
    () => {
      const character = new Character("Ahmed","murtaza","developer")
      expect(character).toEqual(expect.objectContaining({
        firstName:"Ahmed",
        lastName:"murtaza",
        role: "developer"

      }))
    },
  );

  it('should allow you to increase the level', () => {
    const character = new Character("Ahmed","murtaza","developer")
    character.levelUp()
    character.levelUp()
    expect(character.level).toBe(3)
  });

  it('should update the last modified date when leveling up', () => {

  });
});
